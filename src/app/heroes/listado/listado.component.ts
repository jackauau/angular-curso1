import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Superman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(item: string) {
    var i = this.heroes.indexOf(item);

    //if (i !== -1) {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    // }
  }
}
