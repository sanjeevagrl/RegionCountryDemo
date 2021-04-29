export class   IcountryList{
  
  constructor(public name:string ='',
              public capital:string ='',
              public population:string='',
              public currencies:currency[]=[],
              public flag:string=''){

  }

}

export class currency{
  constructor(
    public code:string='',
    public name: string='',
    public symbol: string='',
  ){}
}

