import { LightningElement } from 'lwc';

export default class Skills extends LightningElement {

skills = [{
    set_name: "front-end",
    skills: [{
            name: 'HTML',
            level: 'Intermediate'
        },{
            name: 'CSS',
            level: 'Intermediate'
        }]  
        },{ 
            set_name: "back-end",
            skills: [{
                name: 'Java',
                level: 'Expert'
            }]
        },{ 
            set_name: "salesforce",
            skills: [{
                name: 'Apex',
                level: 'Intermediate'
            },{
                name: 'JavaScript',
                level: 'Intermediate'
            },{
                name: 'HTML',
                level: 'Intermediate'
            },                 
            {
                name: 'Salesforce Platform',
                level: 'Expert'
            },
            {
                name: 'Salesforce Lightning',
                level: 'Expert'
            },
            {
                name: 'Asynchronous Apex',
                level: 'Intermediate'
            },
            {
                name: 'Salesforce Admin Skills',
                level: 'Expert'
            },
            {
                name: 'Aura Components',
                level: 'Intermediate'
            },
            {
                name: 'Lightning Web Components',
                level: 'Expert'
            },
            {
                name: 'Python',
                level: 'Intermediate'
            }
            ]
        }];
}