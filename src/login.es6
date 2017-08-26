/**
 * Created by taha on 8/26/17.
 */
let login = (username, password) => {
  if(username !== 'admin' || password !== 'radical') {
    console.log('incorrect login');
  }
};

login('admin', 'idunn');
