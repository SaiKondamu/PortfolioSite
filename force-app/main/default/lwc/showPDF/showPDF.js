import { LightningElement, api} from 'lwc';

export default class ShowPDF extends LightningElement {
    @api fileId;

    get url() {
        return '/sfc/servlet.shepherd/document/download/' + this.fileId;
    }
}