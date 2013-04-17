
var ApiGen = ApiGen || {};
ApiGen.elements = [["f","_fieldmanager_registry()"],["c","Exception"],["p","Exception::$code"],["p","Exception::$file"],["p","Exception::$line"],["p","Exception::$message"],["m","Exception::__construct()"],["m","Exception::__toString()"],["m","Exception::getCode()"],["m","Exception::getFile()"],["m","Exception::getLine()"],["m","Exception::getMessage()"],["m","Exception::getPrevious()"],["m","Exception::getTrace()"],["m","Exception::getTraceAsString()"],["c","Fieldmanager_Autocomplete"],["p","Fieldmanager_Autocomplete::$datasource"],["p","Fieldmanager_Autocomplete::$exact_match"],["p","Fieldmanager_Autocomplete::$query_callback"],["p","Fieldmanager_Autocomplete::$reciprocal"],["p","Fieldmanager_Autocomplete::$save_empty"],["p","Fieldmanager_Autocomplete::$show_edit_link"],["m","Fieldmanager_Autocomplete::__construct()"],["m","Fieldmanager_Autocomplete::form_element()"],["m","Fieldmanager_Autocomplete::preload_alter_values()"],["m","Fieldmanager_Autocomplete::presave()"],["m","Fieldmanager_Autocomplete::presave_alter_values()"],["c","Fieldmanager_Checkbox"],["p","Fieldmanager_Checkbox::$checked_value"],["p","Fieldmanager_Checkbox::$inline_label"],["p","Fieldmanager_Checkbox::$label_after_element"],["p","Fieldmanager_Checkbox::$save_empty"],["p","Fieldmanager_Checkbox::$unchecked_value"],["m","Fieldmanager_Checkbox::form_element()"],["m","Fieldmanager_Checkbox::presave()"],["c","Fieldmanager_Checkboxes"],["p","Fieldmanager_Checkboxes::$field_class"],["m","Fieldmanager_Checkboxes::form_data_element()"],["m","Fieldmanager_Checkboxes::form_element()"],["c","Fieldmanager_Datasource"],["p","Fieldmanager_Datasource::$ajax_action"],["p","Fieldmanager_Datasource::$allow_optgroups"],["p","Fieldmanager_Datasource::$counter"],["p","Fieldmanager_Datasource::$options"],["p","Fieldmanager_Datasource::$options_callback"],["p","Fieldmanager_Datasource::$use_ajax"],["m","Fieldmanager_Datasource::__construct()"],["m","Fieldmanager_Datasource::autocomplete_search()"],["m","Fieldmanager_Datasource::get_ajax_action()"],["m","Fieldmanager_Datasource::get_edit_link()"],["m","Fieldmanager_Datasource::get_items()"],["m","Fieldmanager_Datasource::get_value()"],["m","Fieldmanager_Datasource::get_view_link()"],["m","Fieldmanager_Datasource::preload_alter_values()"],["m","Fieldmanager_Datasource::presave()"],["m","Fieldmanager_Datasource::presave_alter_values()"],["c","Fieldmanager_Datasource_Post"],["p","Fieldmanager_Datasource_Post::$query_args"],["p","Fieldmanager_Datasource_Post::$query_callback"],["p","Fieldmanager_Datasource_Post::$reciprocal"],["p","Fieldmanager_Datasource_Post::$use_ajax"],["m","Fieldmanager_Datasource_Post::get_ajax_action()"],["m","Fieldmanager_Datasource_Post::get_edit_link()"],["m","Fieldmanager_Datasource_Post::get_items()"],["m","Fieldmanager_Datasource_Post::get_value()"],["m","Fieldmanager_Datasource_Post::get_view_link()"],["m","Fieldmanager_Datasource_Post::presave()"],["m","Fieldmanager_Datasource_Post::presave_alter_values()"],["m","Fieldmanager_Datasource_Post::title_like()"],["c","Fieldmanager_Datasource_Term"],["p","Fieldmanager_Datasource_Term::$append_taxonomy"],["p","Fieldmanager_Datasource_Term::$grouped"],["p","Fieldmanager_Datasource_Term::$only_save_to_taxonomy"],["p","Fieldmanager_Datasource_Term::$store_term_taxonomy_id"],["p","Fieldmanager_Datasource_Term::$taxonomy"],["p","Fieldmanager_Datasource_Term::$taxonomy_args"],["p","Fieldmanager_Datasource_Term::$taxonomy_hierarchical"],["p","Fieldmanager_Datasource_Term::$taxonomy_hierarchical_depth"],["p","Fieldmanager_Datasource_Term::$taxonomy_save_to_terms"],["p","Fieldmanager_Datasource_Term::$use_ajax"],["m","Fieldmanager_Datasource_Term::__construct()"],["m","Fieldmanager_Datasource_Term::build_hierarchical_term_data()"],["m","Fieldmanager_Datasource_Term::get_ajax_action()"],["m","Fieldmanager_Datasource_Term::get_edit_link()"],["m","Fieldmanager_Datasource_Term::get_items()"],["m","Fieldmanager_Datasource_Term::get_taxonomies()"],["m","Fieldmanager_Datasource_Term::get_value()"],["m","Fieldmanager_Datasource_Term::get_view_link()"],["m","Fieldmanager_Datasource_Term::preload_alter_values()"],["m","Fieldmanager_Datasource_Term::presave()"],["m","Fieldmanager_Datasource_Term::presave_alter_values()"],["m","Fieldmanager_Datasource_Term::save_taxonomy()"],["c","Fieldmanager_DraggablePost"],["p","Fieldmanager_DraggablePost::$bins"],["p","Fieldmanager_DraggablePost::$repositories"],["p","Fieldmanager_DraggablePost::$use_image_checkbox"],["m","Fieldmanager_DraggablePost::__construct()"],["m","Fieldmanager_DraggablePost::draggable_item_html()"],["m","Fieldmanager_DraggablePost::flatten_arrays()"],["m","Fieldmanager_DraggablePost::form_element()"],["m","Fieldmanager_DraggablePost::presave()"],["f","fieldmanager_enqueue_scripts()"],["c","Fieldmanager_Field"],["p","Fieldmanager_Field::$add_more_label"],["p","Fieldmanager_Field::$attributes"],["p","Fieldmanager_Field::$content_types"],["p","Fieldmanager_Field::$data_id"],["p","Fieldmanager_Field::$data_type"],["p","Fieldmanager_Field::$debug"],["p","Fieldmanager_Field::$description"],["p","Fieldmanager_Field::$display_if"],["p","Fieldmanager_Field::$extra_elements"],["p","Fieldmanager_Field::$field_class"],["p","Fieldmanager_Field::$index"],["p","Fieldmanager_Field::$inline_label"],["p","Fieldmanager_Field::$is_proto"],["p","Fieldmanager_Field::$is_tab"],["p","Fieldmanager_Field::$label"],["p","Fieldmanager_Field::$label_after_element"],["p","Fieldmanager_Field::$label_element"],["p","Fieldmanager_Field::$limit"],["p","Fieldmanager_Field::$name"],["p","Fieldmanager_Field::$one_label_per_item"],["p","Fieldmanager_Field::$parent"],["p","Fieldmanager_Field::$sanitize"],["p","Fieldmanager_Field::$save_empty"],["p","Fieldmanager_Field::$seq"],["p","Fieldmanager_Field::$skip_save"],["p","Fieldmanager_Field::$sortable"],["p","Fieldmanager_Field::$starting_count"],["p","Fieldmanager_Field::$submit_button_label"],["p","Fieldmanager_Field::$validate"],["p","Fieldmanager_Field::$wp_option_autoload"],["m","Fieldmanager_Field::__construct()"],["m","Fieldmanager_Field::_failed_validation()"],["m","Fieldmanager_Field::_unauthorized_access()"],["m","Fieldmanager_Field::add_another()"],["m","Fieldmanager_Field::add_meta_box()"],["m","Fieldmanager_Field::add_submenu_page()"],["m","Fieldmanager_Field::element_markup()"],["m","Fieldmanager_Field::form_element()"],["m","Fieldmanager_Field::get_collapse_handle()"],["m","Fieldmanager_Field::get_element_attributes()"],["m","Fieldmanager_Field::get_element_id()"],["m","Fieldmanager_Field::get_element_label()"],["m","Fieldmanager_Field::get_extra_element_classes()"],["m","Fieldmanager_Field::get_form_name()"],["m","Fieldmanager_Field::get_form_tree()"],["m","Fieldmanager_Field::get_full_path()"],["m","Fieldmanager_Field::get_multiple_count()"],["m","Fieldmanager_Field::get_remove_handle()"],["m","Fieldmanager_Field::get_seq()"],["m","Fieldmanager_Field::get_sort_handle()"],["m","Fieldmanager_Field::handle_submenu_save()"],["m","Fieldmanager_Field::has_proto()"],["m","Fieldmanager_Field::meta_box_render_callback()"],["m","Fieldmanager_Field::parse_options()"],["m","Fieldmanager_Field::preload_alter_values()"],["m","Fieldmanager_Field::presave()"],["m","Fieldmanager_Field::presave_all()"],["m","Fieldmanager_Field::presave_alter_values()"],["m","Fieldmanager_Field::register_submenu_page()"],["m","Fieldmanager_Field::render_meta_box()"],["m","Fieldmanager_Field::render_submenu_page()"],["m","Fieldmanager_Field::save_fields_for_post()"],["m","Fieldmanager_Field::save_index()"],["m","Fieldmanager_Field::save_to_post_meta()"],["m","Fieldmanager_Field::single_element_markup()"],["m","Fieldmanager_Field::wrap_with_multi_tools()"],["f","fieldmanager_get_baseurl()"],["c","Fieldmanager_Grid"],["p","Fieldmanager_Grid::$field_class"],["p","Fieldmanager_Grid::$grid_sort"],["p","Fieldmanager_Grid::$js_options"],["m","Fieldmanager_Grid::__construct()"],["m","Fieldmanager_Grid::form_element()"],["m","Fieldmanager_Grid::presave()"],["c","Fieldmanager_Group"],["p","Fieldmanager_Group::$child_count"],["p","Fieldmanager_Group::$children"],["p","Fieldmanager_Group::$collapsed"],["p","Fieldmanager_Group::$collapsible"],["p","Fieldmanager_Group::$field_class"],["p","Fieldmanager_Group::$group_is_empty"],["p","Fieldmanager_Group::$label_element"],["p","Fieldmanager_Group::$label_format"],["p","Fieldmanager_Group::$label_macro"],["p","Fieldmanager_Group::$label_token"],["p","Fieldmanager_Group::$tab_limit"],["p","Fieldmanager_Group::$tabbed"],["m","Fieldmanager_Group::__construct()"],["m","Fieldmanager_Group::form_element()"],["m","Fieldmanager_Group::get_element_label()"],["m","Fieldmanager_Group::get_extra_element_classes()"],["m","Fieldmanager_Group::presave()"],["m","Fieldmanager_Group::wrap_with_multi_tools()"],["c","Fieldmanager_Hidden"],["p","Fieldmanager_Hidden::$field_class"],["m","Fieldmanager_Hidden::form_element()"],["c","Fieldmanager_Media"],["p","Fieldmanager_Media::$button_label"],["p","Fieldmanager_Media::$field_class"],["p","Fieldmanager_Media::$has_registered_media"],["p","Fieldmanager_Media::$thumbnail_class"],["m","Fieldmanager_Media::__construct()"],["m","Fieldmanager_Media::form_element()"],["m","Fieldmanager_Media::presave()"],["c","Fieldmanager_Options"],["p","Fieldmanager_Options::$data"],["p","Fieldmanager_Options::$datasource"],["p","Fieldmanager_Options::$first_element"],["p","Fieldmanager_Options::$grouped"],["p","Fieldmanager_Options::$multiple"],["p","Fieldmanager_Options::$options"],["m","Fieldmanager_Options::__construct()"],["m","Fieldmanager_Options::add_option_data()"],["m","Fieldmanager_Options::add_options()"],["m","Fieldmanager_Options::build_hierarchical_term_data()"],["m","Fieldmanager_Options::form_data_element()"],["m","Fieldmanager_Options::form_data_elements()"],["m","Fieldmanager_Options::get_taxonomy_data()"],["m","Fieldmanager_Options::get_taxonomy_insert_data()"],["m","Fieldmanager_Options::option_selected()"],["m","Fieldmanager_Options::preload_alter_values()"],["m","Fieldmanager_Options::presave()"],["m","Fieldmanager_Options::presave_alter_values()"],["m","Fieldmanager_Options::save_taxonomy()"],["c","Fieldmanager_Post"],["p","Fieldmanager_Post::$field_class"],["p","Fieldmanager_Post::$query_callback"],["p","Fieldmanager_Post::$reciprocal"],["p","Fieldmanager_Post::$save_empty"],["p","Fieldmanager_Post::$show_edit_link"],["p","Fieldmanager_Post::$show_post_date"],["p","Fieldmanager_Post::$show_post_type"],["m","Fieldmanager_Post::__construct()"],["m","Fieldmanager_Post::form_element()"],["m","Fieldmanager_Post::get_clear_handle()"],["m","Fieldmanager_Post::presave()"],["m","Fieldmanager_Post::presave_alter_values()"],["m","Fieldmanager_Post::search_posts()"],["m","Fieldmanager_Post::search_posts_using_get_posts()"],["c","Fieldmanager_Radios"],["p","Fieldmanager_Radios::$field_class"],["m","Fieldmanager_Radios::form_data_element()"],["m","Fieldmanager_Radios::form_element()"],["c","Fieldmanager_RichTextArea"],["p","Fieldmanager_RichTextArea::$apply_mce_filters"],["p","Fieldmanager_RichTextArea::$field_class"],["p","Fieldmanager_RichTextArea::$has_added_footer_scripts"],["p","Fieldmanager_RichTextArea::$has_registered_tinymce"],["p","Fieldmanager_RichTextArea::$init_options"],["m","Fieldmanager_RichTextArea::__construct()"],["m","Fieldmanager_RichTextArea::editor_js()"],["m","Fieldmanager_RichTextArea::enqueue_scripts()"],["m","Fieldmanager_RichTextArea::form_element()"],["m","Fieldmanager_RichTextArea::get_mce_options()"],["c","Fieldmanager_Select"],["p","Fieldmanager_Select::$field_class"],["p","Fieldmanager_Select::$first_empty"],["p","Fieldmanager_Select::$query_callback"],["p","Fieldmanager_Select::$type_ahead"],["m","Fieldmanager_Select::__construct()"],["m","Fieldmanager_Select::chosen_init()"],["m","Fieldmanager_Select::form_data_element()"],["m","Fieldmanager_Select::form_data_end_group()"],["m","Fieldmanager_Select::form_data_start_group()"],["m","Fieldmanager_Select::form_element()"],["m","Fieldmanager_Select::search_terms()"],["m","Fieldmanager_Select::search_terms_using_get_terms()"],["f","fieldmanager_set_baseurl()"],["c","Fieldmanager_TextArea"],["p","Fieldmanager_TextArea::$field_class"],["m","Fieldmanager_TextArea::__construct()"],["m","Fieldmanager_TextArea::form_element()"],["c","Fieldmanager_TextField"],["p","Fieldmanager_TextField::$field_class"],["m","Fieldmanager_TextField::__construct()"],["m","Fieldmanager_TextField::form_element()"],["f","fm_add_script()"],["f","fm_add_style()"],["c","FM_Developer_Exception"],["c","FM_Exception"],["f","fm_get_post_meta()"],["f","fm_is_post_edit_screen()"],["f","fm_url_to_post_id()"],["c","FM_Validation_Exception"]];
