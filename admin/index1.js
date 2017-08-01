var app = angular.module("myApp",[]);



app.controller("ctrl1",function(){


        this.degrees = ['Bcom','BE','MBBS','BBA','BSC','BS'];
        this.disciplines = ['Civil','Electrical','Mechanical'];
        this.groups = ['Pre-engineering','Pre-medical','Commerce','Arts','DAE','Computer-Science'];

         this.university = {
            degree :         "",
            degree_title :   "",
            discipline :     "",
            duration :       "",
            intro :          "",
            eligibility :    "",
            group :          [],
            min_percent :    "",
            last_closing_percent : "",
            no_dae_seats : "",
            min_percent_dae : "",
            fee_approach_type : false, //false means first approach
            closing : {
                closing_percentage : "",
                closing_mark : "",
                closing_value : "",
                closing_date : ''

            },

            fee_first_approach : {
                entry_test_fee : "",
                admission_fee : "",
                security_deposit : "",
                min_tuition_fee : "",
                max_tuition_fee : ""
            },
            fee_second_approach : {
                entry_test_fee : "",
                admission_fee : "",
                deposit : "",
                tuition_fee : "",
                fee_credit_hour : "",
                total_credit_hour_theory : "",
                total_credit_hour_lab : "",
                total_semesters : ""


            },
            other_fee : ""
        };


        this.submit_data = function () {


            var nicInstance = nicEditors.findEditor('intro');
            this.university.intro = nicInstance.getContent();


            var nicInstance = nicEditors.findEditor('eligibility');
            this.university.eligibility = nicInstance.getContent();


            var nicInstance = nicEditors.findEditor('other_fee');
            this.university.other_fee = nicInstance.getContent();


            console.log(this.university);
        }


// Groups (fields) Code Starts
        var  groups_array = this.groups;


        // Available groups
        this.fruits = groups_array;

        // Selected fruits

        // Toggle selection for a given fruit by name
        this.toggleSelection = function toggleSelection(fruitName) {
            var idx = this.university.group.indexOf(fruitName);

            // Is currently selected
            if (idx > -1) {
                this.university.group.splice(idx, 1);
            }

            // Is newly selected
            else {
                this.university.group.push(fruitName);
            }

        };

// Groups (fields) Code Ends


    }
);
