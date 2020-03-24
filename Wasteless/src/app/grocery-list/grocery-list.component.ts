import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GroceryList } from 'src/app/models/groceryList';

@Component({
    selector: 'grocery-list',
    templateUrl: './grocery-list.component.html',
})

export class GroceryListComponent{
    listDetailsForm: FormGroup;
    itemsForm: FormGroup;
    isSubmitted: Boolean = false;
    isCountSubmitted: Boolean = false;
    itemsCount: number;
    groceryList = new GroceryList();

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.listDetailsForm = this.formBuilder.group({
            listName: ['', Validators.required],
            itemsCount: ['', Validators.required],
        });
    }

    onSubmit() {
        this.isSubmitted = true;

        if (this.listDetailsForm.invalid) {
            console.log("invalid");
            return;
        }

        for (let i = 0; i < this.itemsCount; i++) {
            console.log(this.itemsForm.get(`itemName${i}`).value);
            console.log(this.itemsForm.get(`quantity${i}`).value);
            console.log(this.itemsForm.get(`calories${i}`).value);
            console.log(this.itemsForm.get(`purchaseDate${i}`).value);
            console.log(this.itemsForm.get(`expirationDate${i}`).value);
        }

        this.isSubmitted = false;
    }

    createList(){
        if (this.listDetailsForm.invalid) {
            console.log("invalid");
            return;
        }
        this.isCountSubmitted = true;
        this.groceryList.name = this.listDetailsForm.get("listName").value;
        this.itemsCount = this.listDetailsForm.get("itemsCount").value;

        let items = {};

        for (let i = 0; i < this.itemsCount; i++) {
            items[`itemName${i}`] = ['', Validators.required];
            items[`quantity${i}`] = ['', Validators.required];
            items[`calories${i}`] = ['', Validators.required];
            items[`purchaseDate${i}`] = ['', Validators.required];
            items[`expirationDate${i}`] = ['', Validators.required];
        }
        this.itemsForm = this.formBuilder.group(items);
    }

    array(n: number): number[] {
        return [...Array(n).keys()];
    }
}