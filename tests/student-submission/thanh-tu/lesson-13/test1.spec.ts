import { test } from './03-fixture';

test('Fill Info Register Page', async ({ registerPage }) => {
  const data = {
    name: 'Thanh Tu',
    email: 'dipthanht2@gmail.com',
    gender: 'Male',
    hobbies: ['reading', 'traveling'],
    interests: ['technology', 'science'],
    country: 'Canada',
    dob: '2000-12-06',
    avatar: 'tests/student-submission/thanh-tu/lesson-13/data-test/ava.jpeg',
    biography:
      'lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy',
    rating: '9',
    color: '#e4eb1e',
  };

  await test.step('Fill Info', async () => {
    await registerPage.fillUsername(data.name);
    await registerPage.fillEmail(data.email);
    await registerPage.checkGender(
      data.gender.toLowerCase() === 'male' ? 'male' : 'female'
    );
    await registerPage.checkHobbies(data.hobbies);
    await registerPage.selectInterest(data.interests);
    await registerPage.selectCountry(data.country);
    await registerPage.fillDOB(data.dob);
    await registerPage.uploadAvatar(data.avatar);
    await registerPage.fillBio(data.biography);
    await registerPage.fillRating(data.rating);
    await registerPage.pickColor(data.color);

    await registerPage.subscribeNewsletter();
    await registerPage.toggleFeature();

    await registerPage.rateStar(80, 10);
  });

  await test.step('Click Submit', async () => {
    await registerPage.clickBtnSubmit();
  });

  await test.step('Verify Result Table', async () => {
    await registerPage.verifyUserInfo({
      name: data.name,
      email: data.email,
      gender: data.gender,
      country: data.country,
      dob: data.dob,
      biography: data.biography,
      rating: data.rating,
      color: data.color,
      newsletter: true,
      enableFeature: true,
      starRating: '4',
    });
  });
});
