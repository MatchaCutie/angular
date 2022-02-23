import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-test',
  templateUrl: './app.test.component.html'
})

export class TestComponent {
  name: string
  color: FormControl = new FormControl();

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.queryParams.subscribe(params => {
      console.log("query")
      console.log(params)
      this.name = params['name'];
    });
    this.route.params.subscribe(params => {
      console.log("params")
      console.log(params)
      this.name = params['id'];
    });
    this.color.setValue('Alice')
    console.log(this.color);
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  reset() {
    this.profileForm.reset()
  }
}
