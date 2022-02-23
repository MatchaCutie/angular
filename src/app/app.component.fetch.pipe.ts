import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchJsonPipe implements PipeTransform {
  private cachedData: any = null;

  constructor(private http: HttpClient) { }
  first: boolean = true

  transform(): any {
    if (this.first) {
      console.log("request");
      this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(result => this.cachedData = result);
      this.first = false
    }

    return this.cachedData;
  }
}
