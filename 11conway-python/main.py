"""
Exercise 11 : Conway
Elsa Catoire - 20.04.2023
"""


def cut_string(string_to_cut):
    """
    take a word or a string and separates the characters if they are not alike
    :param string_to_cut: a string
    :return: separate chars
    """
    space = " "
    new_string = ""
    for i in range(len(string_to_cut) - 1):
        char = string_to_cut[i]
        if string_to_cut[i] != string_to_cut[i+1]:
            new_string = new_string + char + space
        else:
            new_string = new_string + char
    new_string = new_string + string_to_cut[-1]
    return new_string


def describe_string(string_to_describe):
    """
    to detail a string as a code
    :param string_to_describe: what u want to describe
    :return: the description
    """
    new_string = ""
    count = 1
    for i in range(len(string_to_describe) - 1):
        char = string_to_describe[i]
        char2 = string_to_describe[i+1]
        if char != char2:
            new_string = new_string + str(count) + char
            count = 1
        else:
            count += 1
    new_string = new_string + str(count) + string_to_describe[-1]
    return new_string


if __name__ == '__main__':
    print(cut_string("aabbca"), "/expected : aa bb c a")
    print(describe_string("aabbca"), "/expected 2a2b1c1a")
# See PyCharm help at https://www.jetbrains.com/help/pycharm/
