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
    other: Other;
}

interface Component {
    no: number;
    label: string;
    type:string,
    placeholder: string;
    option: Option[];  
    style: Option[];      
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
