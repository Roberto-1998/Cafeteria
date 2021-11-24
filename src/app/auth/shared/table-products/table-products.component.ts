import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import Swal from 'sweetalert2';
import { ProductsService } from '../../../services/products.service';




@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'ingredients','top', 'price', 'actions'];

  @Input() dataSource:Product[]=[];




  constructor(private _productsService:ProductsService) { }

  ngOnInit(): void {
  }

  deleteProduct(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productsService.deleteProduct(id).subscribe((res)=>{
          Swal.fire(
            'Deleted!',
            'Product has been deleted.',
            'success'
          )
        })
      }
    })



  }



}
