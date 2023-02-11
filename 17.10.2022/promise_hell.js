fetchStory()
  .then((story) => {
    return findText(story);
  })
  .then((Text) => {
    return print(text);
  });

// single liners
fetchStory()
  .then((story) => findText(story))
  .then((txt) => print(txt));

// inline
fetchStory().then(findText).then(print);
