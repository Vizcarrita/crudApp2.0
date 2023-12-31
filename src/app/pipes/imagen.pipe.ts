import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const base_url = environment.baseUrl

@Pipe({
  name: 'imagen',
  standalone: true
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo:'usuarios'|'productos'): string {
    if ( !img ){
      return `${ base_url }/upload/productos/no-image`
    } else if ( img.includes('https') ) {
      return img;
    } else if ( img ) {
      return `${ base_url }/upload/${ tipo }/${ img }`;
    } else {
      return `${ base_url }/upload/productos/no-image`
    }
    
  }

}
