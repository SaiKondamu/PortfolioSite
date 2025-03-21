import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/personalImage';

export default class Hero extends LightningElement {

    imageURL = IMAGES + '/4.png';
}