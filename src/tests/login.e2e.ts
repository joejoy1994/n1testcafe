import {t} from 'testcafe';
import Routing from '../model/routing';
import Times from '../model/waiting-times';
import LoginPage from '../model/page-models/login.model';


fixture('Login')
	.page(`https://app-demo.novemberfirst.com/${Routing.PUBLIC}`)
	.meta('section', 'public');

test
('Signup link exists', async t => {
	await t.expect(LoginPage.signupLink.exists).ok({ timeout: Times.SHORT });
});

test
('Forgot password link exists', async t => {
	await t.expect(LoginPage.forgotPasswordLink.exists).ok({ timeout: Times.SHORT });
});

test
('Submit valid credentials and accounts', async t => {
	await t.click(this.customerNumber).typeText('208102287').click(this.email).typeText('joejoy1994@gmail.com').click(this.password).typeText('Joeljoy2021').click(this.submitButton);
});

test
('Submit invalid credentials and show an error message', async t => {
	await t.click(this.customerNumber).typeText('208102287').click(this.email).typeText('joejoy1994@gmail.com').click(this.password).typeText('Joeljoy2022').click(this.submitButton).expect(LoginPage.errorMessage.exists).ok({ timeout: Times.SHORT });
});
