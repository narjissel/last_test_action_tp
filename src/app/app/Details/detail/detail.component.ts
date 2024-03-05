import { Component , Input} from '@angular/core';
import { Product } from '../../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
  @Input() selectedProduct: Product | undefined;
}


