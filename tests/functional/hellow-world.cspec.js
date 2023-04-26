import { Selector } from "testcafe";

fixture('Hellow World Page')
  .page('http://localhost:8080/#/');

test('The home page has text', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});

test('The home page has text', async (t) => {
    await t.expect(Selector('.home h1').innerText).eql('Welcome to Your Vue.js App');
});