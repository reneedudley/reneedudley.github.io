let helpers =  {
  rando : function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  slugify : function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  },
  getFunGreeting : function() {
    var adjectives = ['Hello', 'Howdy', 'Greetings', "Hey, Y'all", 'Hi', "How's a Going", 'Long time no see',"How's it Hanging?", "Hola", 'Bonjour', 'Guten Tag', 'Ciao', 'Cheers','Namaste', 'Salaam'];

    return `${this.rando(adjectives)}`;
  }
}

export default helpers;
