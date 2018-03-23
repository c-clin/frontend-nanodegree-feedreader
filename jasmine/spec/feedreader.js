$(function() {

    describe('RSS Feeds', function() {
  
        it('is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('url is not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
            });
         });

         it('name is not empty', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeTruthy();
            });
         });
    });

  
    describe('The menu', function() {

        it('is hidden by default', function(){ 
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });

        it('is visible when clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });

        it('is not empty', function() {
            $('menu-icon-link').click();
            expect($('.feed-list')).toBeTruthy();
        });
    });   


    describe('Initial Entries', function () {

         beforeEach(function(done) {
            loadFeed(0, function () {
                $('.feed .entry').length
                loadFeed(1, function () {
                    done();
                });
            });
         });

         it('there is at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
         });
    });
    
    describe('New Feed Selection', function () {
         var oldFeed;
         beforeEach(function(done) {
            loadFeed(1, function () {
                oldFeed = $(".feed").html;
                done();
            });
         });

         it('is loaded and the content changes', function (done) {
            loadFeed(2, function() {
                expect(oldFeed).not.toEqual($('.feed').html());
                done();
            });
            
         });
    });
});
