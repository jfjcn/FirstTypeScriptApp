interface KendoTemplate {
}
 
interface DataSource {
    new (data?: any);

    create(any): DataSource;
    read();
    
    data(data?: any): any;
    getByUid(uid: string): any;
}

interface KendoViewEvent {
  view: any;
  preventDefault();
  isDefaultPrevented(): bool;
}

interface KendoData {
    DataSource: DataSource;
}

interface KendoMobileApplication {
    new (documentDomObject?: any, settings?: any);

    navigate(url: string);
    showLoading();
    hideLoading();
}

interface KendoMobile {
    Application: KendoMobileApplication;
}

interface KendoTemplate {
  (data?: any);
}

interface Kendo {
    ui: any;
    bind(jqueryObject: any, vm: any);
    observable(obj: any): any;
    //data: any;
    //data(widget: string): any;

    data: KendoData;
    mobile: KendoMobile;

    template(template: string, options?: any): KendoTemplate;
    render(template: KendoTemplate, data: any): string;

}


 
interface JQuery {
    kendoValidator(opts?: any): Kendo;
    kendoMenu(opts?: any): Kendo;
    kendoDropDownList(opts?: any): Kendo;
    kendoMobileListView(obj: any): Kendo;
    kendoListView(obj: any): Kendo;
    kendoMobileButton(opts?: any): Kendo;
}
 
declare var kendo: Kendo;