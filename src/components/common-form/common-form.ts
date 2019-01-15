import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Tools } from '../../provider/Tools';
/**
 * Generated class for the CommonFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'common-form',
  templateUrl: 'common-form.html'
})
export class CommonFormComponent {

  /**
   * controls是一个控件对象数组，定义控件对象格式为：{ type: 1, name: '', value: '', defaultValue: '', required: true, placeholder: '', pattern: '' }
   */
  @Input() controls: any = [];
  @Output() onControlSelect: EventEmitter<any> = new EventEmitter();

  @ViewChild('fileInput') fileInput: ElementRef;

  currentFileItem: any;
  constructor(
    // private renderer: Renderer,
    private tools: Tools,
    private camera: Camera) {

  }

  placeholderFromItem(item): string {
    return item.placeholder || `输入${item.name}`;
  }

  selectValueFromItem(item): string {
    if (!item.value) {
      return `请选择 (${item.type == 6 ? '多选' : '单选'})`;
    } else {
      let val = item.value.label || item.value;
      // console.log(val);
      if (!val) return null;

      return val.split('|')[0];
    }
  }

  selectItem(item) {
    this.onControlSelect.emit(item);
  }

  uploadFile(item) {
    this.currentFileItem = item;

    // let clickEvent: MouseEvent = new MouseEvent('click', { bubbles: true });
    // this.renderer.invokeElementMethod(
    //   this.fileInput.nativeElement, "dispatchEvent", [clickEvent]
    // );
    this.camera.getPicture({
      quality: 90,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      targetWidth: item.imgWidth || 720,
      targetHeight: item.imgHeight || 1280,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then(imageURI => {
      // alert(imageURI);
      item.value = item.value || [];
      item.value.push(imageURI);
    }).catch(err => {
      this.tools.showToast("设备不支持拍照");
    });
  }

  removeImg(item, file) {
    const files = item.value || [];
    const index = files.indexOf(file);
    if (index !== -1) {
      files.splice(index, 1);
      item.value = files;
    }
  }

  selectedFiles(ev) {
    let files: FileList = this.fileInput.nativeElement.files;
    // console.log(files);
    if (this.currentFileItem) {
      // if (this.currentFileItem.multiple) {
      this.currentFileItem.value = files;
      // } else {
      //   this.currentFileItem.value = files[0];
      // }
    }
  }

  fileValueFromItem(item) {
    if (!item.value) {
      return "点击拍照";
    } else {
      // const files = item.value || [];
      // let temp = [];
      // for (let i = 0; i < files.length; i++) {
      //   let file = files[i];
      //   temp.push(file.name);
      // }
      return "已选择图片";//temp.join(",") || "选择文件";
    }
  }

  openScan(item) {

  }

}
