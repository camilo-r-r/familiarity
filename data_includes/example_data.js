PennController.ResetPrefix(null);

PennController.Sequence( "instructions1", "info1", "practice", "instructions_3", randomize("items"),"send", "end" );

PennController( "instructions1" ,
    newHtml("instructions", "instructions.html")
        .print()
    ,
    newButton("consent button", "weiter")
        .print()
        .wait()
);
PennController( "info1" ,
    newHtml("info", "info2.html")
       .settings.log()
        .print()
    ,
    newButton("info button", "weiter")
        .print()
        .wait( getHtml("info").test.complete())
    ,
    newHtml("consentInfo", "consentInfo.html")
        .settings.log()
        .print()
    ,
    newButton("button2", "weiter")
        .print()
        .wait(getHtml("consentInfo").test.complete()
            .failure( getHtml("consentInfo").warn() ) // wait and display warning message if not all the obligatory fields in the html document are filled
          )
    ,
    getHtml("consentInfo")
        .remove()
    ,
    getButton("button2")
        .remove()

);
PennController("practice",
        newText("context_p","Paula arbeitet als Verk&auml;uferin in einem Einkaufszentrum. Seit Anfang Dezember muss sie wegen der Weihnachtszeit viele &Uuml;berstunden machen. Sie hat das Gef&uuml;hl, nur noch f&uuml;r ihren Job zu leben und wird langsam frustriert. Sie vermisst ihren fr&uuml;heren Alltag.")
            .settings.css("font-size", "30px")
            .settings.center()
            .print()

   ,
        newKey(" ")
           .wait()
    ,
        newText("sentence_p","Paula verbringt ihre Tage in einem Gef&auml;ngnis und f&uuml;rchtet, dass ihr Job sie in den Wahnsinn treibt.")
            .settings.css("font-size", "30px")
            .settings.css("padding-top", "30px")
            .settings.center()
            .print()
     ,
        newKey(" ")
           .wait()
      ,

               newText("scale_title_p", "Wie oft hast du das Wort")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "50px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
               newText("word_p", "Gef&auml;ngnis")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               .settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
            ,
               newText("scale_title2_p", "in einem ähnlichen Kontext schon mal geh&ouml;rt oder gelesen?")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
       newScale("rating_p", 100)
      .settings.slider()
      .settings.center()
      .settings.css("padding-top", "30px")
      .settings.before( newText("left", "noch nie") )
      .settings.after( newText("right", " sehr oft") )
      .print()
      .wait()
   ,
        newButton("finish_p", "senden")
            .settings.center()
            .print()
           .wait()

       ,
        getButton("finish_p")
           .remove()
       ,
        getScale("rating_p")
           .remove()
    ,
        getText("scale_title_p")
           .remove()
      ,
           getText("sentence_p")
           .remove()
     ,
           getText("context_p")
           .remove()
           ,
               getText("scale_title2_p")
               .remove()
         ,

             getText("word_p")
               .remove()

      ,
        newText("pleasewait2_p", "Warte kurz...")
          .print()
    ,
        newTimer("wait", 1000)
            .start()
            .wait()
   ,
        getText("pleasewait2_p")
           .remove()
 ,

        getScale("rating_p").settings.log("last"),
)
                                          .log( "item" , "practice" )

PennController("instructions_3",
    newText("<p>Das war die &Uuml;bung! Jetzt geht es los mit dem Experiment. </p>")
                .settings.css("font-size", "25px")
        .print()
    ,
    newText("<p>als Erinnerung: deine Aufgabe ist es zu einzusch&auml;tzen, wie oft du das fettgedruckte Wort in der dargestellten metaphorischen Bedeutung schon mal geh&ouml;rt oder gelesen hast.</p>")
                .settings.css("font-size", "25px")
        .print()
    ,
    newText("<p>Verstanden? Dann kann es jetzt losgehen! Viel Spa&szlig;!</p>")
                .settings.css("font-size", "25px")
        .print()
    ,
    newButton("Start")
        .print()
        .wait()
)


PennController.Template( PennController.GetTable("items_metob_apt.csv"),
                 variable => PennController("items",
        newText("context",variable.context)
            .settings.css("font-size", "30px")
            .settings.center()
            .print()

   ,
        newKey(" ")
           .wait()
    ,
        newText("sentence",variable.sentence)
            .settings.css("font-size", "30px")
            .settings.css("padding-top", "30px")
            .settings.center()
            .print()
     ,
        newKey(" ")
           .wait()
      ,
               newText("scale_title", "Wie oft hast du das Wort")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "50px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
               newText("word", variable.word)
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               .settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
            ,
               newText("scale_title2", "in einem ähnlichen Kontext schon mal geh&ouml;rt oder gelesen?")
               .settings.css("font-size", "25px")
               .settings.css("padding-top", "10px")
               //.settings.bold()
               .settings.center()
              //.settings.css("padding-left", "100pt")
               .print()
           ,
       newScale("rating", 100)
      .settings.slider()
      .settings.center()
      .settings.css("padding-top", "30px")
      .settings.before( newText("left", "noch nie") )
      .settings.after( newText("right", " sehr oft") )
      .print()
      .wait()
   ,
        newButton("finish", "senden")
            .settings.center()
            .print()
           .wait()

       ,
        getButton("finish")
           .remove()
       ,
        getScale("rating")
           .remove()
    ,
        getText("scale_title")
           .remove()
      ,
           getText("sentence")
           .remove()
     ,
           getText("context")
           .remove()
      ,
          getText("scale_title2")
          .remove()
    ,

        getText("word")
          .remove()
      ,
        newText("pleasewait2", "Warte kurz...")
          .print()
    ,
        newTimer("wait", 1000)
            .start()
            .wait()
   ,
        getText("pleasewait2")
           .remove()
 ,

        getScale("rating").settings.log("last"),
)
                                          .log( "item" , variable.item )



    );
PennController.SendResults( "send" );

    PennController("end",
    newText("Danke f&uuml;r die Teilnahme!")
    .settings.css("font-size", "16pt")
          .settings.center()
          .settings.css("margin-top", "200pt")
        .print()
    ,
    newText("Dein Clickworker code ist: 6794")
    .settings.css("font-size", "16pt")
          .settings.center()
          .settings.css("margin-top", "180pt")
        .print()
    ,
    newButton("void")
        .wait()
);
