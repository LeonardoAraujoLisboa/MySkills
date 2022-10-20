describe('Home Screen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });

  it('should register a new skill', async () => {
    const inputNewSkill = await element(by.id('input-new'))
    const buttonAdd = await element(by.id('button-add'))
    const flatListSkills = await element(by.id('flat-list-skills'))

    await inputNewSkill.tap()
    await inputNewSkill.typeText('React Native')
    await flatListSkills.tap()

    await buttonAdd.tap()

    expect(element(by.id('flat-list-skills'))).toBeVisible()
  })//ai ele abre o seu app, abre o teclado e começa a digitar o React Native e depois clica no botao e por fim fecha o app 
});
