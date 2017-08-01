var app = angular.module("myApp",[]);



app.controller("ctrl1",function(){


    this.degrees = ['Bcom','BE','MBBS','BBA','BSC','BS'];
    this.disciplines = ['Civil','Electrical','Mechanical'];
    this.groups = ['Pre-engineering','Pre-medical','Commerce','Arts','DAE','Computer-Science'];

    var university = {
        degree :         this.selected_degree,
        degree_title :   this.degree_title,
        discipline :     this.discipline,
        duration :       this.duration,
        intro :          this.intro,
        eligibility :    this.eligibility,
        group :          selected_groups,
        min_percent :    this.min_percent,
        last_closing_percent : this.last_closing_percent,
        no_dae_seats : this.no_dae_seats,
        min_percent_dae : this.min_percent_dae,
        fee_approach_type : this.n0,
        closing : {
            closing_percentage : this.closing_percentage,
            closing_mark : this.closing_mark,
            closing_value : this.closing_value,
            closing_date : this.closing_date
        },
        fee_first_approach : {
           entry_test_fee : this.entry_test_fee,
            admission_fee : this.admission_fee,
            security_deposit : this.security_deposit,
            min_tuition_fee : this.min_tuition_fee,
            max_tuition_fee : this.max_tuition_fee
        },
        fee_second_approach : {
            entry_test_fee : this.entry_test_fee,
            admission_fee : this.admission_fee,
            deposit : this.deposit,
            tuition_fee : this.tuition_fee,
            fee_credit_hour : this.fee_credit_hour,
            total_credit_hour_theory : this.total_credit_hour_theory,
            total_credit_hour_lab : this.total_credit_hour_lab,
            total_semesters : this.total_semesters


        },
        other_fee : this.other_fee
    }

        this.submit_data = function () {
            console.log(university);
        }


// Groups (fields) Code Starts
    var  groups_array = this.groups;
    

        // Available groups
        this.fruits = groups_array;

        // Selected fruits
        this.selection = [];
        var selected_groups = this.selection

        // Toggle selection for a given fruit by name
        this.toggleSelection = function toggleSelection(fruitName) {
            var idx = this.selection.indexOf(fruitName);

            // Is currently selected
            if (idx > -1) {
                this.selection.splice(idx, 1);
            }

            // Is newly selected
            else {
                this.selection.push(fruitName);
            }
        };

// Groups (fields) Code Ends


}
);
