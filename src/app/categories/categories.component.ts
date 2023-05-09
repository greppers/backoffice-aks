import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: any;
  formData: any = new FormData();
  icon: any;
  name: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: CategoriesService
  ) {
    this.categoriesService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }
  public saveIcon(files: any) {
    this.icon = files.target.files[0];
  }
  public deleteCategory(id: number) {
    this.categoriesService.deleteCategories(id);
    window.location.reload();
  }
  submitForm() {
    console.log('hello');
    this.formData.append('icon', this.icon);
    this.formData.append('category', JSON.stringify({ name: this.name }));
    this.categoriesService.addCategory(this.formData);
    this.categoriesService
      .getCategories()
      .subscribe((data) => window.location.reload());
  }
}
