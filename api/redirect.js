module.exports = (req, res) => {
    try {
      // Perform the redirect
      res.redirect(301, 'https://maps.app.goo.gl/W5L9FX6z11KrE7fH9');
    } catch (error) {
      console.error("Error during redirect:", error);
      res.status(500).send("Internal Server Error");
    }
};
