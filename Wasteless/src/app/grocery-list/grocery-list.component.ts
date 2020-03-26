import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GroceryList } from 'src/app/models/groceryList';
import { GroceryService } from '../services/grocery.service';
import { GroceryItem } from '../models/groceryItem';

@Component({
    selector: 'grocery-list',
    templateUrl: './grocery-list.component.html',
    providers: [GroceryService]
})

export class GroceryListComponent{
    listDetailsForm: FormGroup;
    itemsForm: FormGroup;
    isSubmitted: Boolean = false;
    isCountSubmitted: Boolean = false;
    itemsCount: number;
    groceryList = new GroceryList();

    constructor(private formBuilder: FormBuilder,
                private groceryService : GroceryService) { }

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
            this.groceryList.items[i] = new GroceryItem ();
            this.groceryList.items[i].name = this.itemsForm.get(`itemName${i}`).value;
            this.groceryList.items[i].quantity = this.itemsForm.get(`quantity${i}`).value;
            this.groceryList.items[i].calories = this.itemsForm.get(`calories${i}`).value;
            this.groceryList.items[i].purchaseDate = this.itemsForm.get(`purchaseDate${i}`).value;
            this.groceryList.items[i].expirationDate = this.itemsForm.get(`expirationDate${i}`).value;
        }

        this.isSubmitted = false;
        this.groceryService.saveList(this.groceryList);
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