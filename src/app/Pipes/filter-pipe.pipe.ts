import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, args: string) {
    if (args == 'All Notes') {
      return value;
    } else {
      args = args.toLowerCase();
    }
    return value.filter((note: any) => {
      return (
        note.noteTitle.toLowerCase().includes(args) |
        note.noteDesciption.toLowerCase().includes(args)
      );
    });
  }

  // transform(value: any, args: string){
  //   if(args == 'All notes'){
  //     return value;
  //   }
  //   else
  //   {
  //     args = args.toLowerCase();
  //   }
  //   return value.filter((note:any)=>{
  //     note.noteTitle.toLowerCase().includes(args) | note.noteDesciption.toLowerCase().includes(args)
  //   });
  // }

}
