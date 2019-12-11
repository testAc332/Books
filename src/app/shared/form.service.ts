import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface ComplexFields {
    [fieldName: string]: string;
}

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor() { }

    bindModel(model: any, form: FormGroup, idFields: string[] = []) {
        this.initForm(model, form);
        if (!this.checkFieldsMatching(model, form)) {
            throw new Error('FormService -> bindModelToForm: Model and Form fields is not matching');
        }
        const formKeys = Object.keys(form.controls);
        formKeys.forEach(key => {
            if (idFields.includes(key)) {
                form.controls[key].valueChanges.subscribe(
                    (newValue) => {
                        model[key] = newValue.id;
                    }
                );
            } else {
                form.controls[key].valueChanges.subscribe(
                    (newValue) => {
                        model[key] = newValue;
                    }
                );
            }
        });
    }

    private initForm(model: any, form: FormGroup) {
        const keys = Object.keys(form.controls);
        keys.forEach(key => {
            form.controls[key].setValue(model[key]);
        });
    }

    private checkFieldsMatching(model: any, form: FormGroup): boolean {
        const formKeys = Object.keys(form.controls);
        const modelKeys = Object.keys(model);
        formKeys.forEach(formKey => {
            if (!modelKeys.includes(formKey)) {
                return false;
            }
        });
        return true;
    }
}
