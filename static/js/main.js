$("#bookService").on('click',function(event) {
        //alert('click success');
        event.preventDefault();
        $(this).attr('disabled','disabled');

        var dt = '' + $("#dueDate").val() + '';

        
            var url = 'http://localhost:8088/lead/61aef23d-997f-4b74-b267-d5f0e8314489';
            var data = {
                mobile: $('#mobile').val(),
                name: $('#name').val(),
                email: $('#email').val(),
                itemId: $("#serviceId").val(),
                dueDate: dt,
                address: ($("#address").val())? $("#address").val() : null,
                description: $("#description").val(),
                referralType: 'Direct'
            };
            $.ajax({
                url: url,
                type: 'POST',
                data: JSON.stringify(data),
                crossDomain: true,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function(data){
                	alert('success');
                    },
                error: function(data) {
                	alert('failed');
                    }
            });

    });

$("#submit").on('click',function(event) {
        //alert('click success');
        event.preventDefault();
        $(this).attr('disabled','disabled');

        
            var url = 'http://localhost:8088/contactUs/61aef23d-997f-4b74-b267-d5f0e8314489';
            var data = {
                mobile: $('#mobile').val(),
                name: $('#name').val(),
                email: $('#email').val(),
                address: $("#address").val()
            };
            $.ajax({
                url: url,
                type: 'POST',
                data: JSON.stringify(data),
                crossDomain: true,
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function(data){
                    alert('success');
                    },
                error: function(data) {
                    alert('failed');
                    }
            });

    });