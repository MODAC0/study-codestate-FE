
module.exports = {
    serverErrorHandler : (event, url) => {
        /*
        event : try안에 실행 되어야 하는 로직이 작성 되어야 합니다.
        url : 서버 콘솔에 전달 되어야 하는 메세지로 [GET] /flight/:id 형식으로 작성 되어야합니다.
        */
        try {
            event();
            console.log(`[Success] ${url}`);
        } catch (error) {
            console.error(`[Error] ${url} ${error}`);
            return res.status(500).json({
              message: 'Internal Server Error',
              stacktrace: error.toString()
            });
          }
    }
}