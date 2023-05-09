import { Component, OnInit } from '@angular/core';
import { AddProductService } from './add-product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: {
    name: string;
    description: string;
    price: number;
    quantity: number;
    bioScore: number;
    tags: any[];
    compositions: { name: string; description: string; quantity: number }[];
    // imageUrls: any;
  } = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    bioScore: 0,
    tags: [],
    compositions: [],
    // imageUrls: [],
  };
  selectedTags: any[] = [];
  multipartFile: any;
  data: FormData = new FormData();
  filesToUpload: any[] = [];
  composition = { name: '', description: '', quantity: 0 };
  constructor(
    private addProductService: AddProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  public popTag(tagToPop: any) {
    const index = this.product.tags.findIndex(
      (tag) => tag.name === tagToPop.name
    );
    if (index !== -1) {
      this.product.tags.splice(index, 1);
    }
  }
  public addTag(tagToPush: any) {
    this.product.tags.push({ name: tagToPush.target.value });
    tagToPush.target.value = '';
  }
  public addComposition(event:any) {
    if (!this.composition.name||!this.composition.description||!this.composition.quantity) {
      return
    }
    this.product.compositions.push(this.composition);
    this.composition = { name: '', description: '', quantity: 0 };
  }
  public popComposition(compositionToPop:any) {
    const index=this.product.compositions.findIndex(comp=>comp.name===compositionToPop.name);
    if (index !== -1) {
      this.product.compositions.splice(index, 1);
    }
  }
  public saveFiles(files: any) {
    const fileList: FileList = files.target.files;
    // this.filesToUpload = files.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file: File = fileList[i];
      this.data.append('file', file);
    }
    if (files.target.files && files.target.files[0]) {
      var filesAmount = files.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let reader = new FileReader();

        reader.onload = (event: any) => {
          this.filesToUpload.push(event.target.result);
        };

        reader.readAsDataURL(files.target.files[i]);
      }
    }
    // data.append('files', files.target.files);
    // console.log('files', files.target.files)
    // this.addProductService.saveFiles(data);
  }
  public deleteFiles() {
    console.log(this.data.getAll('file'));
    this.data.delete('file');
    // this.data.delete('files');
    this.filesToUpload = [];
  }
  public submitForm() {
    this.data.append('product', JSON.stringify(this.product));
    const id = this.route.snapshot.params['id'];
    this.addProductService.addProductToStore(id, this.data);
  }
}
