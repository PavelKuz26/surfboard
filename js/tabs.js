const finedBlockByAlias = alias => {
    return $('.revievs__item').filter((ndx, item) =>{
        return $(item).attr('data-linked-with') == alias
    });
}; 

$('.interactive-avatar__link').click(e =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-open');
    const itemToShow = finedBlockByAlias(target);
    const currentItem = $this.closest('.interactive-avatar')

    itemToShow.addClass('active__item').siblings().removeClass('active__item')

    currentItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active')
});