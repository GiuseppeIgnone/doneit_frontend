import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category/category';
import { API_URL } from '../constants/constant';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategories(){
    return this.httpClient.get<Category[]>(`${API_URL}/all-categories`)
  }
}
