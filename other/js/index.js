/**
 * Created by user on 2016/07/13.
 */
$(document).ready(function () {
    //ִ�к�ȥ����ʽ
    setTimeout(function () {
        $('.slidePage1 .imgBox').removeClass('animated bounceInDown');
    },1000);
    /*initialize Swiper*/
    var swiper = new Swiper('.swiper-container', {
//            pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
//            spaceBetween: 30,
        mousewheelControl: true,
        onSlideChangeEnd: function(swiper){
            //����ͬ��������li��ǩ����ʽ
            $('.navbar ul.nav>li').removeClass('active').eq(swiper.activeIndex).addClass('active');
        }
    });
    /*������ʽ*/
    $('.navbar ul>li').on('click', function () {
        //����ı䵼����li��ǩ����ʽ
        $(this).addClass('active').siblings().removeClass('active');
        //����������ת�����Ӧ��ҳ��
        swiper.slideTo($(this).index());
        //���li��ǩ������˵���
        $(this).parent().parent().removeClass('in');
        $(this).parent().parent().prop('aria-expanded',false);
    });
    //���������Brand�ص���ҳ
    $('.nav-header-logo>a.navbar-brand').on('click', function () {
        if(swiper.activeIndex!=0){
            swiper.slideTo(0);
        }
    });
    // $('.spinner').hide();

    /*first page start*/

    /*first page end*/


    /*second page start*/

    /*second page end*/
})
