import { Injectable } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Injectable()
export class FormUtilities{

    constructor(private formBuilder: FormBuilder){}

    dynamicInput(form, inputName, initFunction){
        form.addControl(inputName, this.formBuilder.array([
            initFunction
        ]))
    }

    addInput(form, inputName, initFunction){
        const control = <FormArray> form.controls[inputName];
        control.push(initFunction)
    }

    removeInput(i: number, form, inputName) {
        const control = < FormArray > form.controls[inputName];
        control.removeAt(i);
    }
}