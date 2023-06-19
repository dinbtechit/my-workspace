import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <table>
      <tr>
        <td>
          <h1>Image from App2</h1>
          <img width="300" src="/assets/undraw_festivities_tvvj.svg">
        </td>
        <td>
          <lib-common></lib-common>
        </td>
      </tr>
    </table>

  `,
  styles: [`
    table {
      border: 1px solid black;
      tr {
        td{
          border: 1px solid black;
        }

      }
    }
  `]
})
export class AppComponent {

}
