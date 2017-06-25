<%@ page import="org.springframework.context.i18n.LocaleContextHolder" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>

<!DOCTYPE html>
<html lang="<%=LocaleContextHolder.getLocale().getCountry()%>">
<head>
    <title>Xiaomi Mi Band 2: Купить умный фитнес-браслет трекер</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1000">
    <link rel="shortcut icon" href="resources/img/favicon.ico" type="image/x-icon">
    <link rel="icon" href="resources/img/favicon.ico" type="image/x-icon">
    <meta name="description" content="<spring:message code="meta.description"/>">
    <meta name="keywords" content="<spring:message code="meta.keywords"/>">
    <meta name="robots" content="noodp,noydir">
    <meta name="robots" content="index, follow">
    <link rel="image_src" href="resources/img/social.jpg">
    <meta property="og:title" content="<spring:message code="meta.og.title"/>">
    <meta property="og:type" content="article">
    <meta property="og:image" content="resources/img/social.jpg">
    <meta property="og:description"
          content="<spring:message code="meta.og.description"/>">
    <meta property="og:site_name" content="<spring:message code="meta.og.site_name"/>">
    <meta name="twitter:card" content="summary">
    <link rel="apple-touch-icon" href="resources/img/apple-touch-icon.png">
    <meta name="Author" content="Mi-Band.ru">
    <meta name="theme-color" content="#f25807">
    <script type="text/javascript" async="" src="resources/js/watch.js"></script>
    <script type="text/javascript">var _head_over_time = (new Date()).getTime();</script>
    <link rel="stylesheet" type="text/css" href="resources/css/main.css">
    <script defer="defer" type="text/javascript" src="resources/js/a.js"></script>

</head>
<body>

<div class="xm-product-box">
    <div class="sh-bar site-topbar-offset sh-bar-fixed " id="J_shBar">
        <div class="container ">
            <div class="logo"></div>
            <h3>Xiaomi Mi Band 2
                <small><span class="sep">|</span> <a href="#" target="_blank">Mi Band 1/1S</a>
                </small>
            </h3>
            <div class="menu" id="J_barMenu"><a class="item delievery-form-button" id="delievery_map"><spring:message code="words.delivery"/></a>
                <div class="item item_2"><spring:message code="words.order"/> № <%= Math.abs(session.getId().hashCode())%></div>
                <a class="btn btn-small btn-primary contact-form-button" id="J_goBuyBtn"
                   onclick="document.getElementsByName('ch[1]')[0].checked = true; document.getElementsByName('num[1]')[0].value = '1'"><spring:message code="words.buy_now"/></a></div>
        </div>
    </div>
    <div class="bd">
        <div class="mj-sh-box">
            <div class="section-itmes sh-section-01 mjjs-items mj-active">
                <div class="text-content"><h1 class="title-h1 webfont"><span>Mi Band 2</span></h1>
                    <h2 class="title-h2 webfont"><spring:message code="words.smart_band"/></h2>
                    <span class="title-info">
                        <spring:message code="words.pedometer"/>
                        <em>｜</em>
                        <spring:message code="words.pulsometer"/>
                        <em>｜</em>
                        <spring:message code="words.watch"/>
                        <em>｜</em>
                        <spring:message code="words.аlarm"/>
                    </span>
                    <div class="money">49.99<em><span> лв.</span></em></div>
                    <div class="price">
                        <!-- <span class="about1">Mi Band 1S (без дисплея): <span class="num">1390</span><span class="rub"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></span><br> <span class="about1">Mi Band (без дисплея и пульсометра): <span class="num">990</span><span class="rub"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></span><br> -->
                        <span><spring:message code="words.color_strap"/><span class="num"> 9.99</span><span> лв.</span></span></div>
                    <a class="btn btn-small btn-primary contact-form-button big-button" id="J_goBuyBtn"
                       onclick="document.getElementsByName('ch[1]')[0].checked = true; document.getElementsByName('num[1]')[0].value = '1'"><spring:message code="words.buy_now"/></a></div>
                <div class="sh-section-01-pic">
                    <div class="sh-section-01 sh-section-01-a cur"></div>
                    <div class="sh-section-01 sh-section-01-b"></div>
                    <div class="sh-section-01 sh-section-01-c"></div>
                    <div class="sh-section-01 sh-section-01-d"></div>
                </div>
            </div>
            <div class="section-itmes sh-section-02 mjjs-items">
                <div class="sh-section-02-a">
                    <div class="text-content">
                        <h2 class="title-h2 webfont"><spring:message code="second_slide.first.title"/></h2>
                        <p class="title-info"><spring:message code="second_slide.first.description"/></p></div>
                    <div class="sh-section-02-a-pic"></div>
                    <ul class="sh-section-02-list">
                        <li class="list-items item1"><i class="icon"></i> <span class="txt"><spring:message code="words.time"/></span></li>
                        <li class="list-items item2"><i class="icon"></i> <span class="txt"><spring:message code="words.steps"/></span></li>
                        <li class="list-items item3"><i class="icon"></i> <span class="txt"><spring:message code="words.pulse"/></span></li>
                    </ul>
                </div>
                <div class="sh-section-02-b">
                    <div class="text-content">
                        <h2 class="title-h2 webfont"><spring:message code="second_slide.second.title"/></h2>
                        <p class="title-info"><spring:message code="second_slide.second.description"/></p></div>
                    <div class="sh-section-02-b-pic"></div>
                    <div class="sh-section-02-d-pic"></div>
                </div>
                <div class="sh-section-02-c">
                    <div class="text-content">
                        <h2 class="title-h2 webfont"><spring:message code="second_slide.third.title"/></h2>
                        <p class="title-info"><spring:message code="second_slide.third.description"/></p></div>
                    <div class="sh-section-02-c-pic"></div>
                </div>
            </div>
            <div class="section-itmes sh-section-03">
                <div class="sh-section-03-b">
                    <div class="text-content">
                        <h2 class="title-h2 webfont"><spring:message code="third_slide.first.title"/></h2>
                        <p class="title-info"><spring:message code="third_slide.first.description"/></p></div>
                </div>
            </div>
            <div class="section-itmes sh-section-03">
                <div class="sh-section-03-c mjfullpage-items">
                    <div class="text-content"><h2 class="title-h2 webfont">Не получается выспаться?<br> Mi Band 2
                        позаботится о Вашем сне!</h2>
                        <p class="title-info">Приятные материалы и легкий вес позволяют носить<br> фитнес-браслет
                            круглые сутки. Ночью он измеряет<br> продолжительность и качество сна. Утром разбудит<br>
                            при помощи легкой вибрации.</p></div>
                </div>
            </div>
            <div class="section-itmes sh-section-03">
                <div class="sh-section-03-a">
                    <div class="text-content"><h2 class="title-h2 webfont">Долго сидите на одном месте?<br>Mi Band 2
                        напомнит об этом!</h2>
                        <p class="title-info">Если Вы немного засиделись, умный браслет<br> провибрирует и напомнит Вам
                            о необходимости двигаться.<br>Разомнитесь, сходите на прогулку - и настроение улучшится!</p>
                    </div>
                </div>
            </div>
            <div class="section-itmes sh-section-05">
                <div class="text-content"><h2 class="title-h2 webfont">Вибрация при получении уведомлений на
                    смартфон</h2>
                    <p class="title-info">Mi Band 2 оповещает Вас о входящем звонке, текстовом сообщении или уведомлении
                        из приложения.<br> Браслет помогает не пропустить важное письмо, звонок или сообщение из
                        социальной сети.</p></div>
                <div class="sh-section-05-pic"><i></i></div>
            </div>
            <div class="section-itmes sh-section-04 mjjs-items">
                <div class="text-content"><h2 class="title-h2 webfont">Разблокировка<br>без ввода пароля</h2>
                    <p class="title-info">Mi Band 2 является уникальным ключом<br> для разблокировки Вашего
                        смартфона.<br> При нахождении рядом с ним,<br> Вам не потребуется вводить пароль.</p></div>
                <div class="sh-section-04-pic"></div>
                <div class="sh-section-04-pic2"></div>
            </div>
            <div class="section-itmes sh-section-06">
                <div class="text-content"><h2 class="title-h2 webfont">Водонепроницаемый браслет</h2>
                    <p class="title-info">Фитнес-трекер защищен по стандарту IP67<br> и не боится влаги, пыли и пота. Не
                        нужно<br> снимать Mi Band 2 во время мытья рук<br> или похода в душ.</p></div>
                <div class="sh-section-06-pic"></div>
            </div>
            <div class="section-itmes sh-section-07">
                <div class="sh-section-07-a mjfullpage-items cur">
                    <div class="text-content text-content-items n-07-a"><h2 class="title-h2 webfont">OLED-дисплей</h2>
                        <p class="title-info">OLED-дисплей отображает текущее время и различные сведения об
                            активности.<br> Обладает сенсорным управлением.</p></div>
                    <div class="text-content text-content-items n-07-b"><h2 class="title-h2 webfont">Bluetooth 4.0</h2>
                        <p class="title-info">Быстрый и стабильный Bluetooth 4.0 обеспечивает<br> бесперебойную работу
                            устройства и потребляет мало энергии.</p></div>
                    <div class="text-content text-content-items n-07-c"><h2 class="title-h2 webfont">Аккумулятор</h2>
                        <p class="title-info">Литий-ионный аккумулятор большой емкости позволяет использовать<br> Mi
                            Band 2 на протяжении 20 дней без подзарядки.</p></div>
                    <div class="text-content text-content-items n-07-d"><h2 class="title-h2 webfont">Пульсометр</h2>
                        <p class="title-info">Высокоточный датчик сердцебиения измеряет пульс в реальном времени<br> и
                            отображает полученную информацию на экране.</p></div>
                    <div class="sh-section-07-img"></div>
                </div>
            </div>
            <div class="section-itmes sh-section-09 mjjs-items">
                <div class="text-content"><h2 class="title-h2 webfont">Протестирован в суровых условиях</h2></div>
                <ul class="sh-section-09-list">
                    <li class="item1">
                        <div class="icon"><span class="pict"></span></div>
                        <h5 class="title webfont">Высокая температура</h5>
                        <p class="txt">128 часов при 70℃</p></li>
                    <li class="item2">
                        <div class="icon"><span class="pict"></span></div>
                        <h5 class="title webfont">Низкая температура</h5>
                        <p class="txt">128 часов при -20℃</p></li>
                    <li class="item3">
                        <div class="icon"><span class="pict"></span></div>
                        <h5 class="title webfont">Ударостойкость</h5>
                        <p class="txt">12 падений на мрамор<br></p></li>
                    <li class="item4">
                        <div class="icon"><span class="pict"></span></div>
                        <h5 class="title webfont">Износостойкость</h5>
                        <p class="txt">24 часа в масле</p></li>
                </ul>
            </div>
            <div class="section-itmes sh-section-10">
                <div class="text-content"><h2 class="title-h2 webfont">Фирменное приложение Mi Fit</h2>
                    <p class="title-info">С помощью официального приложения Mi Fit Вы можете узнать информацию о
                        количестве пройденных шагов, качестве сна, весе и пульсе.<br> Приложение хранит собранную
                        статистику в облаке за все время использования браслета.</p>
                    <h2 class="title-h2 webfont download_title">Скачать:</h2>
                    <table class="download_table">
                        <tbody>
                        <tr>
                            <td><a href="index_files/android/" target="_blank"><i
                                    class="fa fa-android os_big"></i></a></td>
                            <td><a href="index_files/ios/" target="_blank"><i class="fa fa-apple os_big"></i></a>
                            </td>
                            <td><a href="index_files/windows/" target="_blank"><i
                                    class="fa fa-windows os_big"></i></a></td>
                        </tr>
                        <tr>
                            <td><a href="index_files/android/" target="_blank">Android</a></td>
                            <td><a href="index_files/ios/" target="_blank">iOS</a></td>
                            <td><a href="index_files/windows/" target="_blank">Windows Mobile</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--<div class="section-itmes sh-section-10 sh-section-20"> <div class="text-content"> <h2 class="title-h2 webfont">Ремешки на любой вкус и цвет</h2> </div> </div>-->
            <div class="section-itmes sh-section-0 sh-section-00">
                <div class="text-content"><a
                        class="btn btn-small btn-primary contact-form-button big-button big-big-button" id="J_goBuyBtn"
                        onclick="document.getElementsByName('ch[1]')[0].checked = true; document.getElementsByName('num[1]')[0].value = '1'">Купить
                    сейчас</a> <br> <br> Юридическая информация: ИП Бибиков О.В., ОГРНИП 316774600251081
                </div>
            </div>
        </div>
    </div>
</div>
<div id="overlay" class="hide_block"></div>
<div id="contact-form_block" class="hide_block contact_first">
    <div class="section_color_callback">
        <ul class="head-contact-info2">
            <li><a href="mailto:order@mi-band.ru?subject=Mi-band.ru%20-%207427510" onclick=""><i
                    class="fa fa-envelope"></i>order@mi-band.ru</a><br></li>
        </ul>
    </div>
    <div class="callback callback_order">Оформление заказа</div>
    <div class="callback callback_delievery">Доставка</div>
    <form id="order_order">
        <div class="first-step active">
            <div id="first-step">
                <table>
                    <tbody>
                    <tr>
                        <td class="table_img table_img2">
                            <div class="mi-band-2-full"></div>
                        </td>
                        <td class="table_buy">
                            <table class="step miband_table">
                                <tbody>
                                <tr>
                                    <td class="checkbox"><label class="label label2"><input name="ch[1]" value="1"
                                                                                            class="checkbox_item"
                                                                                            type="checkbox"></label>
                                    </td>
                                    <td class="o_img">
                                        <div class="mi-band-2 item_img"></div>
                                    </td>
                                    <td class="type">Mi Band 2</td>
                                    <td class="o_price">1790<span class="rub3"><i class="fa fa-rub"></i><span
                                            class="rub0"> руб.</span></span></td>
                                    <td class="kol"><input class="koll" name="num[1]" pattern="[0-9]" type="number">
                                    </td>
                                    <td class="q qq"></td>
                                </tr>
                                <tr>
                                    <td class="checkbox"><label class="label label2"><input name="ch[2]" value="1"
                                                                                            class="checkbox_item"
                                                                                            type="checkbox"></label>
                                    </td>
                                    <td class="o_img">
                                        <div class="mi-band-1s item_img"></div>
                                    </td>
                                    <td class="type">Mi Band 1S</td>
                                    <td class="o_price">1390<span class="rub3"><i class="fa fa-rub"></i><span
                                            class="rub0"> руб.</span></span></td>
                                    <td class="kol"><input class="koll" name="num[2]" pattern="[0-9]" type="number">
                                    </td>
                                    <td class="q"><span class="about1">?</span></td>
                                </tr>
                                <tr>
                                    <td class="checkbox"><label class="label label2"><input name="ch[3]" value="1"
                                                                                            class="checkbox_item"
                                                                                            type="checkbox"></label>
                                    </td>
                                    <td class="o_img">
                                        <div class="mi-band item_img"></div>
                                    </td>
                                    <td class="type">Mi Band</td>
                                    <td class="o_price">990<span class="rub3"><i class="fa fa-rub"></i><span
                                            class="rub0"> руб.</span></span></td>
                                    <td class="kol"><input class="koll" name="num[3]" pattern="[0-9]" type="number">
                                    </td>
                                    <td class="q"><span class="about1">?</span></td>
                                </tr>
                                <tr id="black">
                                    <td class="full_td warn">Гарантия 12 месяцев. Быстрая доставка.</td>
                                    <td class="full_td pad">Оформление заказов ежедневно.</td>
                                    <td class="full_td pad difference_text">В чем основные различия моделей Mi Band?
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer"><p class="next"><input value="Продолжить" class="form-submit" id="first_button"
                                                             type="button"></p></div>
        </div>
        <div class="second-step2">
            <div id="second-step2">
                <div class="overlay_table">
                    <table class="step px_1">
                        <tbody>
                        <tr id="black">
                            <td class="full_td2"><span class="bold">Черный</span> ремешок в стандартной комплектации.
                            </td>
                            <td class="full_td2">Цветные ремешки приобретаются дополнительно.</td>
                            <td class="full_td3 full_td6">Аксессуары для Mi Band 2</td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="step long">
                        <tbody>
                        <tr>
                            <td class="checkbox"><label class="label"><input name="ch[21]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-2-white item_img"></div>
                            </td>
                            <td class="type">Белый<br>ремешок</td>
                            <td class="o_price">490<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[21]" pattern="[0-9]" type="number"></td>
                            <td class="checkbox"><label class="label"><input name="ch[24]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-2-red item_img"></div>
                            </td>
                            <td class="type">Красный ремешок</td>
                            <td class="o_price">490<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[24]" pattern="[0-9]" type="number"></td>
                        </tr>
                        <tr>
                            <td class="checkbox"><label class="label"><input name="ch[17]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-2-turquoise item_img"></div>
                            </td>
                            <td class="type">Бирюзовый<br>ремешок</td>
                            <td class="o_price">490<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[17]" pattern="[0-9]" type="number"></td>
                            <td class="checkbox"><label class="label"><input name="ch[20]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-2-blue_1 item_img"></div>
                            </td>
                            <td class="type">Синий<br>ремешок</td>
                            <td class="o_price">490<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[20]" pattern="[0-9]" type="number"></td>
                        </tr>
                        <tr>
                            <td class="checkbox"><label class="label"><input name="ch[18]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-2-green item_img"></div>
                            </td>
                            <td class="type">Зеленый ремешок</td>
                            <td class="o_price">490<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[18]" pattern="[0-9]" type="number"></td>
                            <td class="checkbox"><label class="label"><input name="ch[34]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-2-pink item_img"></div>
                            </td>
                            <td class="type">Розовый<br>ремешок</td>
                            <td class="o_price">490<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[34]" pattern="[0-9]" type="number"></td>
                        </tr>
                        <tr>
                            <td class="checkbox"><label class="label"><input name="ch[22]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-2-glass item_img"></div>
                            </td>
                            <td class="type">Защитная пленка</td>
                            <td class="o_price">290<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[22]" pattern="[0-9]" type="number"></td>
                            <td class="checkbox"><label class="label"><input name="ch[35]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-box item_img"></div>
                            </td>
                            <td class="type">Подарочная коробка</td>
                            <td class="o_price">90<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[35]" pattern="[0-9]" type="number"></td>
                            <!-- </tr> <tr> <td class="checkbox"><label class="label"><input type="checkbox" name="ch[17]" value="1" class="checkbox_item"/></label></td> <td class="o_img"><div class="mi-band-2-turquoise item_img"></div></td> <td class="type">Бирюзовый<br>ремешок</td> <td class="o_price"><span class="rub3"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td> <td class="kol2"><input type="number" class="koll" name="num[17]" pattern="[0-9]"/></td> <td class="checkbox"><label class="label"><input type="checkbox" name="ch[34]" value="1" class="checkbox_item"/></label></td> <td class="o_img"><div class="mi-band-2-pink item_img"></div></td> <td class="type">Розовый<br>ремешок</td> <td class="o_price"><span class="rub3"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td> <td class="kol2"><input type="number" class="koll" name="num[34]" pattern="[0-9]"/></td> <td class="checkbox"><label class="label"><input type="checkbox" name="ch[31]" value="1" class="checkbox_item"/></label></td> <td class="o_img"><div class="mi-band-2-yellow item_img"></div></td> <td class="type">Желтый<br>ремешок</td> <td class="o_price"><span class="rub3"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td> <td class="kol2"><input type="number" class="koll" name="num[31]" pattern="[0-9]"/></td> <td class="checkbox"><label class="label"><input type="checkbox" name="ch[19]" value="1" class="checkbox_item"/></label></td> <td class="o_img"><div class="mi-band-2-orange item_img"></div></td> <td class="type">Оранжевый<br>ремешок</td> <td class="o_price"><span class="rub3"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td> <td class="kol2"><input type="number" class="koll" name="num[19]" pattern="[0-9]"/></td> <td class="checkbox"><label class="label"><input type="checkbox" name="ch[22]" value="1" class="checkbox_item"/></label></td> <td class="o_img"><div class="mi-band-2-glass item_img"></div></td> <td class="type">Защитная пленка</td> <td class="o_price"><span class="rub3"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td> <td class="kol2"><input type="number" class="koll" name="num[22]" pattern="[0-9]"/></td> <td class="checkbox">&nbsp;</td> <td class="o_img">&nbsp;</td> <td class="type">&nbsp;</td> <td class="o_price">&nbsp;</td> <td class="kol2">&nbsp;</td> <td class="checkbox"><label class="label"><input type="checkbox" name="ch[33]" value="1" class="checkbox_item"/></label></td> <td class="o_img"><div class="mi-band-2-leather item_img"></div></td> <td class="type">Кожаный<br>ремешок</td> <td class="o_price"><span class="rub3"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td> <td class="kol2"><input type="number" class="koll" name="num[33]" pattern="[0-9]"/></td> -->
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer"><p class="next"><input value="Продолжить" class="form-submit" id="second_button"
                                                             type="button"></p>
                <p class="back"><input value="Назад" class="form-submit" id="second2_button_back" type="button"></p>
            </div>
        </div>
        <div class="second-step">
            <div id="second-step">
                <div class="overlay_table">
                    <table class="step px_1">
                        <tbody>
                        <tr id="black">
                            <td class="full_td2 full_td6"><span class="bold">Черный</span> ремешок в стандартной
                                комплектации.
                            </td>
                            <td class="full_td2">Бесплатный цветной ремешок на выбор.</td>
                            <td class="full_td3 full_td4">Аксессуары для Mi Band 1/1S</td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="step long">
                        <tbody>
                        <tr>
                            <td class="checkbox"><label class="label"><input name="ch[4]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-blue item_img"></div>
                            </td>
                            <td class="type">Синий<br>ремешок</td>
                            <td class="o_price">0<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[4]" pattern="[0-9]" type="number"></td>
                            <td class="checkbox"><label class="label"><input name="ch[5]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-pink item_img"></div>
                            </td>
                            <td class="type">Розовый ремешок</td>
                            <td class="o_price">0<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[5]" pattern="[0-9]" type="number"></td>
                        </tr>
                        <tr>
                            <td class="checkbox"><label class="label"><input name="ch[6]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-green item_img"></div>
                            </td>
                            <td class="type">Зеленый ремешок</td>
                            <td class="o_price">0<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[6]" pattern="[0-9]" type="number"></td>
                            <td class="checkbox"><label class="label"><input name="ch[7]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-orange item_img"></div>
                            </td>
                            <td class="type">Оранжевый ремешок</td>
                            <td class="o_price">0<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[7]" pattern="[0-9]" type="number"></td>
                        </tr>
                        <tr>
                            <td class="checkbox"><label class="label"><input name="ch[8]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-yellow item_img"></div>
                            </td>
                            <td class="type">Желтый ремешок</td>
                            <td class="o_price">0<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[8]" pattern="[0-9]" type="number"></td>
                            <td class="checkbox"><label class="label"><input name="ch[30]" value="1"
                                                                             class="checkbox_item"
                                                                             type="checkbox"></label></td>
                            <td class="o_img">
                                <div class="mi-band-gift item_img"></div>
                            </td>
                            <td class="type">Подарочный пакет</td>
                            <td class="o_price">90<span class="rub3"><i class="fa fa-rub"></i><span
                                    class="rub0"> руб.</span></span></td>
                            <td class="kol2"><input class="koll" name="num[30]" pattern="[0-9]" type="number"></td>
                        </tr>
                        <!--<tr> <td class="checkbox">&nbsp;</td> <td class="o_img">&nbsp;</td> <td class="type">&nbsp;</td> <td class="o_price">&nbsp;</td> <td class="kol2">&nbsp;</td> <td class="checkbox"><label class="label"><input type="checkbox" name="ch[9]" value="1" class="checkbox_item"/></label></td> <td class="o_img"><div class="mi-band-black item_img"></div></td> <td class="type">Черный ремешок (доп.)</td> <td class="o_price"><span class="rub3"><i class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td> <td class="kol2"><input type="number" class="koll" name="num[9]" pattern="[0-9]"/></td> </tr>-->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer"><p class="next"><input value="Продолжить" class="form-submit" id="second2_button"
                                                             type="button"></p>
                <p class="back"><input value="Назад" class="form-submit" id="second_button_back" type="button"></p>
            </div>
        </div>
        <div class="last-step">
            <div id="last-step">
                <table>
                    <tbody>
                    <tr>
                        <td class="table_img plus1">
                            <div class="mi-band-2-full"></div>
                        </td>
                        <td class="table_buy plus2">
                            <table class="step">
                                <tbody>
                                <tr>
                                    <td><input name="id" value="<%= Math.abs(session.getId().hashCode())%>" type="hidden">
                                        <input name="token" value="<%=session.getAttribute("name")%>" type="hidden">
                                        <input name="price" value="" type="hidden">
                                        <p class="last_px">Ваше имя:<br> <input class="name" name="name" size="35"
                                                                                type="text"></p>
                                        <p class="no_phone hide_block"> Пожалуйста, введите номер телефона. </p>
                                        <p class="error hide_block"> Ошибка. Пожалуйста, позвоните нам. </p>
                                        <p>Контактный телефон (без "8"):<br> <input required="" class="phone"
                                                                                    name="phone" id="phone" size="35"
                                                                                    pattern=".{7,}" type="tel"></p>
                                        <div class="callback3">Доставка</div>
                                        <table class="delievery_h">
                                            <tbody>
                                            <tr>
                                                <td class="delievery tariff-green">Зона №1, «Москва»: 290<span
                                                        class="rub3"><i class="fa fa-rub"></i><span
                                                        class="rub0"> руб.</span></span></td>
                                                <td class="delievery tariff-orange">Зона №2, «Подмосковье»: 490<span
                                                        class="rub3"><i class="fa fa-rub"></i><span
                                                        class="rub0"> руб.</span></span></td>
                                                <td class="delievery tariff-red">Зона №3, «Область»: 690<span
                                                        class="rub3"><i class="fa fa-rub"></i><span
                                                        class="rub0"> руб.</span></span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <div class="map_click">Посмотреть зоны доставки на карте</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer"><p class="next"><input value="Продолжить" class="form-submit" type="submit"></p>
                <p class="back"><input value="Назад" class="form-submit" id="last_button_back" type="button"></p></div>
        </div>
        <div class="delievery-step">
            <div id="delievery-step">
                <!--<script src="index_fia_002.js_002" type="text/javascript"></script>-->
                <!--<div id="map">-->
                <!--<ymaps class="ymaps-map ymaps-i-ua_js_yes" style="z-index: 0; width: 0px; height: 0px;">-->
                <!--<ymaps class="ymaps-glass-pane ymaps-events-pane"-->
                <!--style="z-index: 500; position: absolute; width: 0px; height: 0px; left: 0px; top: 0px; -moz-user-select: none; cursor: url(&quot;https://api-maps.yandex.ru/2.0.45/release/../images/ef50ac9e93aaebe3299791c79f277f8e.cur&quot;) 16 16, url(&quot;https://api-maps.yandex.ru/2.0.45/release/../images/ef50ac9e93aaebe3299791c79f277f8e.cur&quot;), move;"-->
                <!--unselectable="on"></ymaps>-->
                <!--<ymaps class="ymaps-layers-pane" style="z-index: 100; position: absolute; left: 0px; top: 0px;">-->
                <!--<ymaps style="z-index: 150; position: absolute; transform: translate3d(0px, 0px, 0px) scale(1, 1);">-->
                <!--<ymaps style="position: absolute; transform: translate3d(0px, 0px, 0px) scale(1, 1); left: 0px; top: 0px;">-->
                <!--<ymaps style="opacity: 1; background-size: 100% 100%; position: absolute; -moz-user-select: none; background-repeat: no-repeat; background-image: url(&quot;https://vec03.maps.yandex.net/tiles?l=map&amp;v=17.06.02-2&amp;x=309&amp;y=160&amp;z=9&amp;scale=1&amp;lang=ru_RU&quot;); width: 256px; height: 256px; left: -129px; top: -139px; transition-duration: 300ms; transition-property: opacity;"-->
                <!--unselectable="on"></ymaps>-->
                <!--<ymaps style="opacity: 1; background-size: 100% 100%; position: absolute; -moz-user-select: none; background-repeat: no-repeat; background-image: url(&quot;https://vec04.maps.yandex.net/tiles?l=map&amp;v=17.06.02-2&amp;x=309&amp;y=161&amp;z=9&amp;scale=1&amp;lang=ru_RU&quot;); width: 256px; height: 256px; left: -129px; top: 117px; transition-duration: 300ms; transition-property: opacity;"-->
                <!--unselectable="on"></ymaps>-->
                <!--<ymaps style="opacity: 1; background-size: 100% 100%; position: absolute; -moz-user-select: none; background-repeat: no-repeat; background-image: url(&quot;https://vec01.maps.yandex.net/tiles?l=map&amp;v=17.06.02-2&amp;x=310&amp;y=160&amp;z=9&amp;scale=1&amp;lang=ru_RU&quot;); width: 256px; height: 256px; left: 127px; top: -139px; transition-duration: 300ms; transition-property: opacity;"-->
                <!--unselectable="on"></ymaps>-->
                <!--<ymaps style="opacity: 1; background-size: 100% 100%; position: absolute; -moz-user-select: none; background-repeat: no-repeat; background-image: url(&quot;https://vec02.maps.yandex.net/tiles?l=map&amp;v=17.06.02-2&amp;x=310&amp;y=161&amp;z=9&amp;scale=1&amp;lang=ru_RU&quot;); width: 256px; height: 256px; left: 127px; top: 117px; transition-duration: 300ms; transition-property: opacity;"-->
                <!--unselectable="on"></ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-copyrights-pane" style="z-index: 1000; position: absolute;">-->
                <!--<ymaps>-->
                <!--<ymaps class="ymaps-copyrights-logo">-->
                <!--<ymaps class="ymaps-logotype-div"><a target="_blank"-->
                <!--class="ymaps-logo-link ymaps-logo-link-ru"-->
                <!--href="https://yandex.ru/maps/?origin=jsapi&amp;ll=37.619899,55.740000&amp;z=9&amp;l=">-->
                <!--<ymaps class="ymaps-logo-link-wrap"></ymaps>-->
                <!--</a></ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-copyrights-legend">-->
                <!--<ymaps class="ymaps-copyright-legend-container">-->
                <!--<ymaps class="ymaps-copyright-legend">-->
                <!--<ymaps class="ymaps-copyright-legend-element ymaps-copyright-legend-element-black">-->
                <!--<ymaps style="display: inline;">© Яндекс</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-copyright-agreement ymaps-copyright-agreement-black"><a-->
                <!--href="https://yandex.ru/legal/maps_termsofuse/?lang=ru" target="_blank">Условия-->
                <!--использования</a></ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-controls-pane" style="z-index: 800; position: static;">-->
                <!--<ymaps class="ymaps-controls-lefttop" style="z-index: 800;">-->
                <!--<ymaps style="top: 75px; left: 5px; position: absolute;">-->
                <!--<ymaps>-->
                <!--<ymaps class="ymaps-b-zoom">-->
                <!--<ymaps class="ymaps-b-zoom__button ymaps-b-zoom__button_type_minus"-->
                <!--unselectable="on" style="-moz-user-select: none;">-->
                <!--<ymaps class="ymaps-b-form-button ymaps-b-form-button_size_sm ymaps-b-form-button_theme_grey-sm ymaps-b-form-button_height_26 ymaps-i-bem"-->
                <!--role="button">-->
                <!--<ymaps class="ymaps-b-form-button__left"></ymaps>-->
                <!--<ymaps class="ymaps-b-form-button__content">-->
                <!--<ymaps class="ymaps-b-form-button__text">-->
                <!--<ymaps class="ymaps-b-zoom__sprite"></ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-b-zoom__scale" style="display: none;">-->
                <!--<ymaps class="ymaps-b-zoom__scale-bg"></ymaps>-->
                <!--<ymaps class="ymaps-b-zoom__mark" style="top:70px;">-->
                <!--<ymaps class="ymaps-b-zoom__mark-inner">-->
                <!--<ymaps class="ymaps-b-zoom__sprite"></ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-b-hint-placeholder"></ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-b-zoom__button ymaps-b-zoom__button_type_plus"-->
                <!--unselectable="on" style="-moz-user-select: none;">-->
                <!--<ymaps class="ymaps-b-form-button ymaps-b-form-button_size_sm ymaps-b-form-button_theme_grey-sm ymaps-b-form-button_height_26 ymaps-i-bem"-->
                <!--role="button">-->
                <!--<ymaps class="ymaps-b-form-button__left"></ymaps>-->
                <!--<ymaps class="ymaps-b-form-button__content">-->
                <!--<ymaps class="ymaps-b-form-button__text">-->
                <!--<ymaps class="ymaps-b-zoom__sprite"></ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--<ymaps class="ymaps-graphics-pane"-->
                <!--style="z-index: 300; position: absolute; left: 0px; top: 0px;">-->
                <!--<ymaps unselectable="on" style="-moz-user-select: none;">-->
                <!--<ymaps class="graphics-canvas"-->
                <!--style="top: 0px; left: 0px; transform: translateZ(0px); position: absolute; z-index: 650;">-->
                <!--<ymaps>-->
                <!--<canvas style="position: absolute; width: 257px; height: 257px; left: -334px; top: -236px;"-->
                <!--width="257" height="257"></canvas>-->
                <!--<canvas style="position: absolute; width: 257px; height: 257px; left: -334px; top: 21px;"-->
                <!--width="257" height="257"></canvas>-->
                <!--<canvas style="position: absolute; width: 257px; height: 257px; left: -77px; top: -236px;"-->
                <!--width="257" height="257"></canvas>-->
                <!--<canvas style="position: absolute; width: 257px; height: 257px; left: -77px; top: 21px;"-->
                <!--width="257" height="257"></canvas>-->
                <!--<canvas style="position: absolute; width: 257px; height: 257px; left: 180px; top: -236px;"-->
                <!--width="257" height="257"></canvas>-->
                <!--<canvas style="position: absolute; width: 257px; height: 257px; left: 180px; top: 21px;"-->
                <!--width="257" height="257"></canvas>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</ymaps>-->
                <!--</div>-->
                <table class="delievery_window">
                    <tbody>
                    <tr>
                        <td class="delievery tariff-green delievery_td">«Москва»: 290<span class="rub3"><i
                                class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td>
                        <td class="delievery tariff-orange delievery_td">«Подмосковье»: 490<span class="rub3"><i
                                class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td>
                        <td class="delievery tariff-red delievery_td">«Область»: 690<span class="rub3"><i
                                class="fa fa-rub"></i><span class="rub0"> руб.</span></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer order_delievery"><p class="next"><input value="Продолжить" class="form-submit"
                                                                             id="delievery_button_back1" type="button">
            </p>
                <p class="back"><input value="Назад" class="form-submit" id="delievery_button_back" type="button"></p>
            </div>
            <div class="modal-footer no_order_delievery"><p class="next"><input value="Продолжить" class="form-submit"
                                                                                id="delievery_button_next"
                                                                                onclick="document.getElementsByName('ch[1]')[0].checked = true; document.getElementsByName('num[1]')[0].value = '1'"
                                                                                type="button"></p></div>
        </div>
        <div class="difference-step">
            <div id="difference-step">
                <table class="difference_window">
                    <tbody>
                    <tr>
                        <td class="difference_td"></td>
                        <td class="difference_td">Mi Band 2</td>
                        <td class="difference_td">Mi Band 1S</td>
                        <td class="difference_td">Mi Band</td>
                    </tr>
                    <tr>
                        <td class="difference_td">Наличие дисплея</td>
                        <td class="difference_td diff_plus">+</td>
                        <td class="difference_td diff_minus">-</td>
                        <td class="difference_td diff_minus">-</td>
                    </tr>
                    <tr>
                        <td class="difference_td">Пульсометр</td>
                        <td class="difference_td diff_plus">+</td>
                        <td class="difference_td diff_plus">+</td>
                        <td class="difference_td diff_minus">-</td>
                    </tr>
                    <tr>
                        <td class="difference_td">Шагомер</td>
                        <td class="difference_td diff_plus">+</td>
                        <td class="difference_td diff_plus">+</td>
                        <td class="difference_td diff_plus">+</td>
                    </tr>
                    <tr>
                        <td class="difference_td2">Ремешки<br>в комплекте</td>
                        <td class="difference_td diff_plus">черный</td>
                        <td class="difference_td2 diff_plus">черный<br>+ цветной</td>
                        <td class="difference_td2 diff_plus">черный<br>+ цветной</td>
                    </tr>
                    <tr>
                        <td class="difference_td">Цена</td>
                        <td class="difference_td diff_price">1790<span class="rub3"><i class="fa fa-rub"></i><span
                                class="rub0"> руб.</span></span></td>
                        <td class="difference_td diff_price">1390<span class="rub3"><i class="fa fa-rub"></i><span
                                class="rub0"> руб.</span></span></td>
                        <td class="difference_td diff_price">990<span class="rub3"><i class="fa fa-rub"></i><span
                                class="rub0"> руб.</span></span></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer order_delievery"><p class="next"><input value="Продолжить" class="form-submit"
                                                                             id="difference_button_back1" type="button">
            </p>
                <p class="back"><input value="Назад" class="form-submit" id="difference_button_back" type="button"></p>
            </div>
            <div class="modal-footer no_order_delievery"><p class="next"><input value="Продолжить" class="form-submit"
                                                                                id="delievery_button_next"
                                                                                onclick="document.getElementsByName('ch[1]')[0].checked = true; document.getElementsByName('num[1]')[0].value = '1'"
                                                                                type="button"></p></div>
        </div>
        <div class="contact-form-thanks">
            <div class="thanks">Спасибо!</div>
            <div class="thanks2">Мы свяжемся с Вами в ближайшее время.<br> <i class="fa fa-thumbs-up"></i><br>
                <div class="share"><span id="share"><a rel="nofollow"
                                                       style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(resources/img/icons.png) -0px 0 no-repeat"
                                                       href="#" data-count="vk"
                                                       onclick="window.open('//vk.com/share.php?url=http%3A%2F%2Fmi-band.ru%2F&amp;title=Xiaomi%20Mi%20Band%202%3A%20%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%20%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80&amp;description=%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81%20%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%20%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80%20Xiaomi%20Mi%20Band%202%20%D0%B2%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5%20%D0%BF%D0%BE%20%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9%20%D1%86%D0%B5%D0%BD%D0%B5%20%D1%81%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%BE%D0%B9%20%D0%BF%D0%BE%20%D0%B2%D1%81%D0%B5%D0%B9%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8.', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false"
                                                       title="Поделиться В Контакте" target="_blank"></a><a
                        rel="nofollow"
                        style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(resources/img/icons.png) -32px 0 no-repeat"
                        href="#" data-count="fb"
                        onclick="window.open('//www.facebook.com/sharer.php?m2w&amp;u=http%3A%2F%2Fmi-band.ru%2F', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false"
                        title="Поделиться в Facebook" target="_blank"></a><a rel="nofollow"
                                                                             style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(resources/img/icons.png) -64px 0 no-repeat"
                                                                             href="#" data-count="twi"
                                                                             onclick="window.open('//twitter.com/intent/tweet?text=Xiaomi%20Mi%20Band%202%3A%20%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%20%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80&amp;url=http%3A%2F%2Fmi-band.ru%2F', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false"
                                                                             title="Добавить в Twitter"
                                                                             target="_blank"></a><a rel="nofollow"
                                                                                                    style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(resources/img/icons.png) -96px 0 no-repeat"
                                                                                                    href="#"
                                                                                                    data-count="odkl"
                                                                                                    onclick="window.open('//ok.ru/dk?st.cmd=addShare&amp;st._surl=http%3A%2F%2Fmi-band.ru%2F&amp;title=Xiaomi%20Mi%20Band%202%3A%20%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%20%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false"
                                                                                                    title="Добавить в Одноклассники"
                                                                                                    target="_blank"></a><a
                        rel="nofollow"
                        style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(resources/img/icons.png) -128px 0 no-repeat"
                        href="#" data-count="gplus"
                        onclick="window.open('//plus.google.com/share?url=http%3A%2F%2Fmi-band.ru%2F', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false"
                        title="Поделиться в Google+" target="_blank"></a><a rel="nofollow"
                                                                            style="display:inline-block;vertical-align:bottom;width:32px;height:32px;margin:0 6px 6px 0;padding:0;outline:none;background:url(resources/img/icons.png) -160px 0 no-repeat"
                                                                            href="#" data-count="mail"
                                                                            onclick="window.open('//connect.mail.ru/share?url=http%3A%2F%2Fmi-band.ru%2F&amp;title=Xiaomi%20Mi%20Band%202%3A%20%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81-%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%20%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80&amp;description=%D0%9A%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%83%D0%BC%D0%BD%D1%8B%D0%B9%20%D1%84%D0%B8%D1%82%D0%BD%D0%B5%D1%81%20%D0%B1%D1%80%D0%B0%D1%81%D0%BB%D0%B5%D1%82%20%D1%82%D1%80%D0%B5%D0%BA%D0%B5%D1%80%20Xiaomi%20Mi%20Band%202%20%D0%B2%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B5%20%D0%BF%D0%BE%20%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9%20%D1%86%D0%B5%D0%BD%D0%B5%20%D1%81%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%BE%D0%B9%20%D0%BF%D0%BE%20%D0%B2%D1%81%D0%B5%D0%B9%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8.&amp;imageurl=null', '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0');return false"
                                                                            title="Поделиться в Моем Мире@Mail.Ru"
                                                                            target="_blank"></a></span></div>
            </div>
        </div>
    </form>
</div>
<div id="about_pop-up" class="hide_block">
    <div class="about_text">
        <div class="about1_text hide_block">Перейти на сайт,<br>посвященный Mi Band 1/1S?
            <div class="about_yes"><a href="index_files/1/" target="_blank"><input value="Да" class="about_button"
                                                                                   id="about1_button"
                                                                                   type="button"></a></div>
            <div class="about_no"><input value="Нет" class="about_button" type="button"></div>
        </div>
        <div class="about2_text hide_block">Перейти на сайт,<br>посвященный Mi Band 2?
            <div class="about_yes"><a href="index_files/" target="_blank"><input value="Да" class="about_button"
                                                                                 id="about2_button" type="button"></a>
            </div>
            <div class="about_no"><input value="Нет" class="about_button" type="button"></div>
        </div>
    </div>
</div>
</body>
</html>