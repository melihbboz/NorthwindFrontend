import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[]=[];
  currentCategory:Category | null;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data;
      
    })
  }

  

  setCurrentCategory(category:Category){
    this.currentCategory= category;

  }
  clearCurrentCategory(){
    this.currentCategory= null;
  }
  getCurrentCategoryClass(category:Category){
    if(category==this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
