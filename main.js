let signInForm = document.querySelector('#signIn');
let signUpForm = document.querySelector('#signUp');
let passwordUp = document.querySelector('#passwordUp');
let confirmPassword = document.querySelector('#confirmPassword');
let register = document.querySelector('#register');
let signIn = document.querySelector('#sign-in');
let signInContainer = document.querySelector('.sign-in-container');
let signUpContainer = document.querySelector('.sign-up-container');

signInForm.addEventListener('input', function (e) {
	let check = new Check(e.target);
	check.isValid();
})

signUpForm.addEventListener('input', function (e) {
	let check = new Check(e.target);
	check.isValid();
})

register.addEventListener('click', function () {
	signInContainer.classList.add('hidden');
	signUpContainer.classList.remove('hidden');
})

signIn.addEventListener('click', function () {
	signInContainer.classList.remove('hidden');
	signUpContainer.classList.add('hidden');
})

class Check {
	input;
	constructor(input) {
		this.input = input;
	}

	isValid() {
		if (!this.input.checkValidity()) {
			this.invalid();
		} else {
			this.valid();
		}

		if (this.input == confirmPassword) {
			if (confirmPassword.value != passwordUp.value) {
				this.invalid();
			}
		}
	}

	invalid() {
		this.input.classList.add('wrong');
		this.input.parentElement.lastElementChild.classList.add('visible');
	}

	valid() {
		this.input.classList.remove('wrong');
		this.input.parentElement.lastElementChild.classList.remove('visible');
	}
}
