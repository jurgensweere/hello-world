import { Selector } from "testcafe";

fixture('Hello World Page')
  .page('http://localhost:8080/#/');

test('The home page has text 1', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text 2', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text 3', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text 4', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text 5', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});