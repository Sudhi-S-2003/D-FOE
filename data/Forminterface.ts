interface Other {
    [key: string]: string;
}

interface Option {
    name: string;
    value: string;
}

interface Basic {
    bgColor: string;
    color: string;
    width: string;
    height: string;
    label:string,
    others: Other;
}

interface Component {
    no: number;
    label: string;
    type:string,
    placeholder: string;
    options: Option[];  
    styles: Option[];      
    other: Other;
}

interface Forminterface {
    id: string;
    name: string;
    basic: Basic;
    count: number;
    components: Component[]; 
    userid:string,
    formid:string,
    digest:string
}

export default Forminterface;
