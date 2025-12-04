def extract_invoice_details(invoice):
    # Split by spaces
    parts = invoice.split(' ')
    
    # Extract product name - it's between "for" and "of"
    # Find indices of "for" and "of"
    for_index = parts.index("for")
    of_index = parts.index("of")
    # Product name is everything between them
    product = ' '.join(parts[for_index + 1:of_index])
    
    # Extract amount - it's after "amount" and before "USD"
    amount_index = parts.index("amount")
    amount = parts[amount_index + 1]
    
    # Extract date - it's after "on" and is the last element (without the period)
    on_index = parts.index("on")
    date = parts[on_index + 1].rstrip('.')
    
    return {
        "product_name": product,
        "price": amount,
        "issue_date": date
    }

# do not modify the code below this line
print(extract_invoice_details("Invoice for Apple Watch of amount 399 USD issued on 2023.09.10."))


# # code 2
# import re

# def extract_invoice_details(invoice):
#     # Pattern to match the invoice format
#     pattern = r"Invoice for (.+?) of amount (\d+) USD issued on (.+)\."
    
#     match = re.search(pattern, invoice)
    
#     if match:
#         product = match.group(1)
#         amount = match.group(2)
#         date = match.group(3)
        
#         return {
#             "product_name": product,
#             "price": amount,
#             "issue_date": date
#         }
    
#     return None

# # Test
# print(extract_invoice_details("Invoice for Apple Watch of amount 399 USD issued on 2023.09.10."))

# code 3
# def extract_invoice_details(invoice):
#     # Find product name
#     product_start = invoice.find("for ") + 4
#     product_end = invoice.find(" of amount")
#     product = invoice[product_start:product_end]
    
#     # Find amount
#     amount_start = invoice.find("amount ") + 7
#     amount_end = invoice.find(" USD")
#     amount = invoice[amount_start:amount_end]
    
#     # Find date
#     date_start = invoice.find("on ") + 3
#     date_end = invoice.find(".", date_start)
#     date = invoice[date_start:date_end]
    
#     return {
#         "product_name": product,
#         "price": amount,
#         "issue_date": date
#     }

# # Test
# print(extract_invoice_details("Invoice for Apple Watch of amount 399 USD issued on 2023.09.10."))

# code 4
def extract_invoice_details(invoice):
    # Remove the trailing period first
    invoice = invoice.rstrip('.')
    
    # Replace key phrases to make splitting easier
    invoice = invoice.replace("Invoice for ", "")
    invoice = invoice.replace(" of amount ", "|")
    invoice = invoice.replace(" USD issued on ", "|")
    
    # Now split by the delimiter
    parts = invoice.split("|")
    
    product = parts[0]
    amount = parts[1]
    date = parts[2]
    
    return {
        "product_name": product,
        "price": amount,
        "issue_date": date
    }

# Test
print(extract_invoice_details("Invoice for Apple Watch of amount 399 USD issued on 2023.09.10."))