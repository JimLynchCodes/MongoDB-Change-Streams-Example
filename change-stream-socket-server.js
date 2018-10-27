


Open ws connection {


  Open mongo changestream connection {


      within mongo watch callback, use ws.send() to send the changes to any listening clients,
      thus updating them in real time.


  }


}