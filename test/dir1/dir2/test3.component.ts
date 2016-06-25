import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  templateUrl: '../../template.html',
  styleUrls: ['../../style1.css', '../../style2.css'],
  providers: [HTTP_PROVIDERS]

})
class Test2Component{
  constructor() {}
}