const cs = [
    { firstname: " Charles", lastname: " Babbage", birthdate: "December 26, 1791"},
    { firstname: " Alan", lastname: " Turing", birthdate: "June 23, 1912"},
    { firstname: " Tim", lastname: " Berners-Lee", birthdate: "June 8, 1955"},
    { firstname: " Larry", lastname: " Page", birthdate: "March 26, 1973"},
    { firstname: " John", lastname: " von Neumann", birthdate: "December 28, 1903"},
    { firstname: " Ken", lastname: " Thompson", birthdate: "February 4, 1943"},
    { firstname: " Sergey", lastname: " Brin", birthdate: "August 21, 1973"},
    { firstname: " James", lastname: " Gosling", birthdate: "May 19, 1955"},
    { firstname: " Dennis", lastname: " Ritchie", birthdate: "September 9, 1941"},
    { firstname: " Konrad", lastname: " Zuse", birthdate: "June 22, 1910"},
    { firstname: " John", lastname: " Mauchly", birthdate: "August 30, 1907"}
];


let app = new Vue({
    el: '#csApp',
    data: {
        scientists: cs,
        original_scientists: cs,
        searchTerm: ''
    },
    methods: {
        filterList: function () {
            this.scientists = this.original_scientists.filter(s => {
                if (s.firstname.indexOf(this.searchTerm) > -1)
                    return true;
                if (s.lastname.indexOf(this.searchTerm) > -1)
                    return true;
                if (s.birthdate.indexOf(this.searchTerm) > -1)
                    return true;
                return false;
            });
        // },
        // matchingScientists: function () {
        //     return this.original_scientists.filter(s => {
        //         if (s.firstname.indexOf(this.searchTerm) > -1)
        //             return true;
        //         if (s.lastname.indexOf(this.searchTerm) > -1)
        //             return true;
        //         if (s.birthdate.indexOf(this.searchTerm) > -1)
        //             return true;
        //         return false;
        //     });
        },
        clearSearch: function () {
            this.searchTerm = '';
            this.filterList();
        },
        sortByName: function () {
            this.original_scientists.sort((a,b) => {
                if (a.firstname > b.firstname) return 1;
                if (a.firstname < b.firstname) return -1;
                return 0;
            });
        },
        compareByProperty: function (p) {
            this.original_scientists.sort((a,b) => {
                if (a[p] > b[p]) return 1;
                if (a[p] < b[p]) return -1;
                return 0;
            });
            this.filterList();
        }
    }
});
