import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent)
  items!: QueryList<CarouselItemComponent>;
  private currentSlide = 0;

  ngAfterContentInit() {
    this.items.toArray()[this.currentSlide].isActive = true;
  }

  previousSlide() {
    this.items.toArray()[this.currentSlide].isActive = false;
    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;
    this.items.toArray()[this.currentSlide].isActive = true;
  }

  nextSlide() {
    this.items.toArray()[this.currentSlide].isActive = false;
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    this.items.toArray()[this.currentSlide].isActive = true;
  }
}
