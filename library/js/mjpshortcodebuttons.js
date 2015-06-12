(function() {
     tinymce.PluginManager.add( 'mjp_shortcodeselect', function( editor, url) {
          editor.addButton( 'mjp_shortcodeselect', {
               text: 'Add Shortcode',
               icon: false,
               type: 'menubutton',
               menu: [
                         // Example of adding a textbox screen to fillout attributes
                         // For more examples: http://fiddle.tinymce.com/ngdaab/0
                         {
                              text: 'Button',
                              onclick: function() {
                                   editor.windowManager.open( {
                                        title: 'Button: Options',
                                        body: [
                                             {
                                                  type: 'textbox',
                                                  name: 'linkAtt',
                                                  label: 'Link'
                                             },
                                             {
                                                  type: 'textbox',
                                                  name: 'buttonText',
                                                  label: 'Content',
                                                  multiline: true,
                                                  minWidth: 300,
                                                  minHeight: 100
                                             }
                                        ],
                                        onsubmit: function( e ) {
                                             // Insert content when the window form is submitted
                                             editor.insertContent('[button link="'+ e.data.linkAtt +'"]'+ e.data.buttonText +'[/button]');
                                        }
                                   });
                              }
                         },
                         // Example of just pasting a shortcode into the editor
                         {
                              text: 'One Third',
                              onclick: function() {
                                   editor.insertContent( '[one_third_first] ... content goes here...[/one_third_first]' + '<br>' +
                                        '[one_third] ...content goes here...[/one_third]' + '<br>' + '[one_third_last] ... content goes here...[/one_third_last]');
                              }
                         }
                    ]
          });
     });
})();