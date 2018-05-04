module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const unreadMail = jQuery("span[title*='Inbox'] + div > span").first().text();
        const unreadSkype = jQuery('#O365_Lync_ButtonID > div > span:nth-child(1)').first().text();
        
        let cnt = 0;
        if (unreadMail) {
             cnt +=  Number.parseInt(unreadMail);
        }
        if (unreadSkype) {
             cnt +=  Number.parseInt(unreadSkype);
        }
        Franz.setBadge(cnt);
    };
    Franz.loop(getMessages);
};
