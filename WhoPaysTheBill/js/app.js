const {createApp, reactive, computed} = Vue;

const DEFAULT_STATE = {
    state: true,
    inputName: '',
    names: [],
    errors:'',
    showError: false,
    result:''
}

createApp({
    setup() {

        const data = reactive(DEFAULT_STATE);

        const isReady = computed(() => data.names.length > 1);

        const addNameToList = () => {
            const userName = data.inputName;

            if(validate(userName)) {
                data.names.push(userName);
                data.inputName = '';
                data.showError = false;
            }
            else {
                data.showError = true;
            }
        }

        const validate = (userName) => {
            data.errors = '';

            if(userName === '' || userName === null || userName === undefined || userName === '') {
                data.errors = 'Name cannot be empty';
                return false;
            }

            if(data.names.includes(userName)) {
                data.errors = 'Name already exists';
                return false;
            }

            return true;
        }

        const removeName = (index) => {
            data.names.splice(index, 1);
        }

        const getRandomName = () => {
            return data.names[Math.floor(Math.random() * data.names.length)];
        }

        const generateResult = () => {
            let randomName = getRandomName();

            if(data.result !== '') {
                while(data.result === randomName) {
                    randomName = getRandomName();
                }
            }

            data.result = randomName;
        }

        const showResults = () => {
            generateResult();
            data.state = false;
        }

        const resetApp = () => {
            data.state = true;
            data.inputName = '';
            data.names = [];
            data.showError = false;
            data.errors = '';
            data.showError = true;
            data.result = '';
        }

       return {
            data,
           addNameToList,
           removeName,
           isReady,
           showResults,
           resetApp,
       }
    }
}).mount('#app');